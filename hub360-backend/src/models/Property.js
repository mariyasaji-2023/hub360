import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    listingIntent: { type: String, enum: ["rent", "sale"], default: "rent" },
    type: {
      type: String,
      enum: ["Apartment", "House", "Flat", "Villa", "PG / Shared"],
      default: "Apartment",
    },
    city: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    rent: { type: Number, required: true, min: 0 },
    bedrooms: { type: Number, required: true, min: 0 },
    furnishing: {
      type: String,
      enum: ["Unfurnished", "Semi-Furnished", "Fully Furnished"],
      default: "Unfurnished",
    },
    maintenance: {
      type: String,
      enum: ["Provided", "Not Provided"],
      default: "Not Provided",
    },
    description: { type: String, trim: true, default: "" },
    ownerName: { type: String, required: true, trim: true },
    ownerPhone: { type: String, required: true, trim: true },
    images: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model("Property", propertySchema);
