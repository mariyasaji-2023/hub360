import Property from "../models/Property.js";

export async function listProperties(req, res) {
  const { city, type, maxRent, bedrooms, furnishing, listingIntent } = req.query;
  const filter = {};

  if (city) filter.city = { $regex: city, $options: "i" };
  if (type && type !== "Any") filter.type = type;
  if (furnishing && furnishing !== "Any") filter.furnishing = furnishing;
  if (bedrooms && bedrooms !== "Any") filter.bedrooms = Number(bedrooms);
  if (listingIntent) filter.listingIntent = listingIntent;
  if (maxRent) filter.rent = { $lte: Number(maxRent) };

  const properties = await Property.find(filter).sort({ createdAt: -1 });
  res.json(properties);
}

export async function getProperty(req, res) {
  const property = await Property.findById(req.params.id);
  if (!property) return res.status(404).json({ message: "Property not found" });
  res.json(property);
}

export async function createProperty(req, res) {
  const {
    title,
    listingIntent,
    type,
    city,
    address,
    price,
    bedrooms,
    furnishing,
    maintenance,
    description,
    ownerName,
    ownerPhone,
  } = req.body;

  const images = (req.files || []).map((f) => `/uploads/${f.filename}`);

  const property = await Property.create({
    title,
    listingIntent,
    type,
    city,
    address,
    rent: Number(price),
    bedrooms: Number(bedrooms),
    furnishing,
    maintenance,
    description,
    ownerName,
    ownerPhone,
    images,
  });

  res.status(201).json(property);
}

export async function deleteProperty(req, res) {
  const property = await Property.findByIdAndDelete(req.params.id);
  if (!property) return res.status(404).json({ message: "Property not found" });
  res.status(204).send();
}
  