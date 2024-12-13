import mongoose from "mongoose";

const slugSchema = mongoose.Schema(
  {
    subdomain: {
      type: String,
      required: true,
    },
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
  },
  {
    timestamps: true,
  }
);

const Slug = mongoose.model("Slug", slugSchema);

export default Slug;
