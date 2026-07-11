export default function PropertyCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-card overflow-hidden flex flex-col border border-navy/5">
      <div className="skeleton aspect-video w-full" />
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="skeleton h-5 w-3/5 rounded" />
          <div className="skeleton h-5 w-16 rounded" />
        </div>
        <div className="skeleton h-3.5 w-2/5 rounded" />
        <div className="skeleton h-3.5 w-full rounded" />
        <div className="skeleton h-3.5 w-4/5 rounded" />
        <div className="flex items-center gap-4 mt-1">
          <div className="skeleton h-3.5 w-16 rounded" />
          <div className="skeleton h-3.5 w-24 rounded" />
        </div>
        <div className="skeleton h-9 w-full rounded-lg mt-2" />
      </div>
    </div>
  );
}