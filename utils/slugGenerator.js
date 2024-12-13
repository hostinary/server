import { generateSlug } from "random-word-slugs";
import { redis } from "../index.js";
import Slug from "../models/slugs.js";

const slugGenerator = async () => {
  let uniqueSlug = null;
  let isUnique = false;

  while (!isUnique) {
    const currentSlug = generateSlug(2, { format: "camel" }).toLowerCase();

    // Check in Redis cache
    const existsInCache = await redis.exists(currentSlug);
    if (!existsInCache) {
      // Check in database if not found in Redis
      const existingSlug = await Slug.findOne({ slug: currentSlug });

      if (!existingSlug) {
        uniqueSlug = currentSlug;
        isUnique = true;

        await redis.set(currentSlug, true, "EX", 86400); // 86400 seconds = 1 day

        await Slug.create({ subdomain: uniqueSlug });
      }
    }
  }

  return uniqueSlug;
};

export default slugGenerator;
