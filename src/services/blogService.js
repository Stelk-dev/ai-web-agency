import {
  collection,
  getDocs,
  doc,
  getDoc,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../config/firebase";

// Collection name
const BLOGS_COLLECTION = "blogs";

// Helper function to format Firestore timestamp to readable date
export const formatFirebaseDate = (timestamp) => {
  if (!timestamp) return "";

  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("it-IT", options);
};

// Helper function to extract YouTube video ID from URL
export const getYoutubeVideoId = (url) => {
  if (!url) return null;

  const regex =
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

// Function to get all blog posts from Firebase
export const getAllBlogPosts = async () => {
  try {
    const blogsRef = collection(db, BLOGS_COLLECTION);
    const q = query(blogsRef, orderBy("created_at", "desc"));
    const querySnapshot = await getDocs(q);

    const blogPosts = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      blogPosts.push({
        id: doc.id,
        ...data,
        // Format the date for display
        displayDate: formatFirebaseDate(data.created_at),
        // Extract YouTube video ID if URL exists
        youtubeVideoId: getYoutubeVideoId(data.youtube_url),
      });
    });

    return blogPosts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
};

// Function to get a specific blog post by ID
export const getBlogPostById = async (id) => {
  try {
    const docRef = doc(db, BLOGS_COLLECTION, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        ...data,
        // Format the date for display
        displayDate: formatFirebaseDate(data.created_at),
        // Extract YouTube video ID if URL exists
        youtubeVideoId: getYoutubeVideoId(data.youtube_url),
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching blog post:", error);
    throw error;
  }
};

// Function to get featured posts (first N posts)
export const getFeaturedBlogPosts = async (limit = 3) => {
  try {
    const allPosts = await getAllBlogPosts();
    return allPosts.slice(0, limit);
  } catch (error) {
    console.error("Error fetching featured blog posts:", error);
    throw error;
  }
};

// Helper function to determine which content to display based on language
export const getBlogContent = (post, language = "it") => {
  if (language === "it" && post.content_it) {
    return post.content_it;
  } else if (language === "en" && post.content_en) {
    return post.content_en;
  } else if (post.content_it) {
    return post.content_it;
  } else if (post.content_en) {
    return post.content_en;
  }
  return "";
};

// Helper function to format reading time
export const formatReadingTime = (minutes) => {
  if (!minutes) return "";
  return `${minutes} min lettura`;
};
