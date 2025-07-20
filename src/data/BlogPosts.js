// Blog posts data - Now fetched from Firebase
// This file contains helper functions for blog operations

// Import Firebase blog service
import {
  getAllBlogPosts,
  getBlogPostById,
  getFeaturedBlogPosts,
  formatFirebaseDate,
  getBlogContent,
  formatReadingTime,
  getYoutubeVideoId,
} from "../services/blogService";

// Legacy function to format date (kept for backward compatibility)
export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("it-IT", options);
};

// Function to get featured or latest posts from Firebase
export const getFeaturedPosts = async (limit = 3) => {
  try {
    return await getFeaturedBlogPosts(limit);
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return [];
  }
};

// Function to get all posts from Firebase
export const getAllPosts = async () => {
  try {
    return await getAllBlogPosts();
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
};

// Function to get post by ID from Firebase
export const getPostById = async (id) => {
  try {
    return await getBlogPostById(id);
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    return null;
  }
};

// Re-export utility functions from blog service
export {
  formatFirebaseDate,
  getBlogContent,
  formatReadingTime,
  getYoutubeVideoId,
};
