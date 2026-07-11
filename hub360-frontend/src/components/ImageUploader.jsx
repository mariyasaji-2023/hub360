import { useCallback, useEffect, useRef, useState } from "react";
import { ImagePlus, Star, UploadCloud, X } from "lucide-react";

const MAX_FILES = 8;
const MAX_SIZE_MB = 5;

/**
 * Multi-image upload field with drag-and-drop and thumbnail previews.
 * Keeps File objects in state (via the `images` prop, lifted to the
 * parent form) so the parent can send them to a real API later, e.g.:
 *
 *   const data = new FormData();
 *   images.forEach(({ file }) => data.append("photos", file));
 *   await fetch("/api/properties", { method: "POST", body: data });
 *
 * Preview URLs are created with URL.createObjectURL and revoked on
 * removal / unmount to avoid leaking memory.
 */
export default function ImageUploader({ images, onChange }) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  // Revoke object URLs when the component unmounts
  useEffect(() => {
    return () => {
      images.forEach((img) => URL.revokeObjectURL(img.url));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addFiles = useCallback(
    (fileList) => {
      const incoming = Array.from(fileList).filter((f) =>
        f.type.startsWith("image/")
      );

      if (incoming.length === 0) {
        setError("Please select image files only.");
        return;
      }

      const tooLarge = incoming.some((f) => f.size > MAX_SIZE_MB * 1024 * 1024);
      if (tooLarge) {
        setError(`Each image must be under ${MAX_SIZE_MB}MB.`);
        return;
      }

      const room = MAX_FILES - images.length;
      if (room <= 0) {
        setError(`You can upload up to ${MAX_FILES} photos.`);
        return;
      }

      const accepted = incoming.slice(0, room).map((file) => ({
        file,
        url: URL.createObjectURL(file),
        id: `${file.name}-${file.lastModified}-${Math.random().toString(36).slice(2, 7)}`,
      }));

      setError(
        incoming.length > room
          ? `Only added ${room} of ${incoming.length} — ${MAX_FILES} photo max.`
          : ""
      );
      onChange([...images, ...accepted]);
    },
    [images, onChange]
  );

  function handleInputChange(e) {
    if (e.target.files?.length) addFiles(e.target.files);
    e.target.value = ""; // allow re-selecting the same file
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
  }

  function removeImage(id) {
    const target = images.find((img) => img.id === id);
    if (target) URL.revokeObjectURL(target.url);
    onChange(images.filter((img) => img.id !== id));
  }

  function makeCover(id) {
    const index = images.findIndex((img) => img.id === id);
    if (index <= 0) return;
    const reordered = [...images];
    const [chosen] = reordered.splice(index, 1);
    reordered.unshift(chosen);
    onChange(reordered);
  }

  return (
    <div>
      <label
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`flex flex-col items-center justify-center gap-2 text-center border-2 border-dashed rounded-xl px-4 py-8 cursor-pointer transition-colors ${
          isDragging
            ? "border-accent bg-accent/5"
            : "border-navy/20 hover:border-accent/50 hover:bg-navy/[0.02]"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="sr-only"
          onChange={handleInputChange}
        />
        <span className="w-10 h-10 rounded-full bg-accent/10 grid place-items-center">
          <UploadCloud size={20} className="text-accent" />
        </span>
        <p className="text-sm font-semibold text-navy-DEEP">
          Drag photos here, or click to browse
        </p>
        <p className="text-xs text-ink/50">
          PNG or JPG, up to {MAX_SIZE_MB}MB each · {images.length}/{MAX_FILES} added
        </p>
      </label>

      {error && (
        <p className="text-xs text-red-600 mt-2 animate-fade-up">{error}</p>
      )}

      {images.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-4">
          {images.map((img, i) => (
            <div
              key={img.id}
              className="group relative aspect-square rounded-lg overflow-hidden border border-navy/10 animate-fade-up"
            >
              <img
                src={img.url}
                alt={`Property preview ${i + 1}`}
                className="w-full h-full object-cover"
              />

              {i === 0 && (
                <span className="absolute top-1.5 left-1.5 flex items-center gap-1 bg-navy-DEEP/80 text-ivory text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  <Star size={10} className="fill-accent-light text-accent-light" />
                  Cover
                </span>
              )}

              <div className="absolute inset-0 bg-navy-DEEP/0 group-hover:bg-navy-DEEP/40 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                {i !== 0 && (
                  <button
                    type="button"
                    onClick={() => makeCover(img.id)}
                    title="Make cover photo"
                    className="w-7 h-7 grid place-items-center rounded-full bg-white/90 text-navy-DEEP hover:bg-white"
                  >
                    <Star size={14} />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => removeImage(img.id)}
                  title="Remove photo"
                  className="w-7 h-7 grid place-items-center rounded-full bg-white/90 text-red-600 hover:bg-white"
                >
                  <X size={14} />
                </button>
              </div>
            </div>
          ))}

          {images.length < MAX_FILES && (
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="aspect-square rounded-lg border-2 border-dashed border-navy/15 text-navy/40 hover:text-accent hover:border-accent/50 grid place-items-center transition-colors"
            >
              <ImagePlus size={20} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}