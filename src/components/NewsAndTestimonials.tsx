"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ThumbsUp, 
  MessageSquare, 
  Share2, 
  Globe, 
  Heart, 
  ExternalLink, 
  Settings, 
  Lock, 
  Unlock, 
  X, 
  Plus, 
  Save, 
  Image as ImageIcon, 
  CheckCircle2, 
  Eye 
} from 'lucide-react';

// Decagram Verified Badge resembling the real Facebook verified icon
const VerifiedBadge = () => (
  <svg className="w-4 h-4 text-[#1877f2] fill-current inline-block ml-1" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c.65 0 1.29.26 1.77.72l1.1 1.05c.29.28.67.44 1.07.44h1.53c1 0 1.8.8 1.8 1.8v1.52c0 .4.16.78.44 1.07l1.05 1.1c.46.48.72 1.12.72 1.77 0 .65-.26 1.29-.72 1.77l-1.05 1.1c-.28.29-.44.67-.44 1.07v1.53c0 1-.8 1.8-1.8 1.8h-1.52c-.4 0-.78.16-1.07.44l-1.1 1.05c-.48.46-1.12.72-1.77.72-.65 0-1.29-.26-1.77-.72l-1.1-1.05c-.29-.28-.67-.44-1.07-.44H6.8c-1 0-1.8-.8-1.8-1.8v-1.52c0-.4-.16-.78-.44-1.07L3.5 13.77c-.46-.48-.72-1.12-.72-1.77 0-.65.26-1.29.72-1.77l1.05-1.1c.28-.29.44-.67.44-1.07V6.8c0-1 .8-1.8 1.8-1.8h1.52c.4 0 .78-.16 1.07-.44l1.1-1.05c.48-.46 1.12-.72 1.77-.72zm3.3 7.3L11 13.6l-2.3-2.3c-.39-.39-1.02-.39-1.4 0-.39.39-.39 1.02 0 1.41l3 3c.39.39 1.02.39 1.41 0l5-5c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.4 0z" />
  </svg>
);

// Standard Facebook Logo Icon for branding
const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

interface FacebookPost {
  id: string;
  date: string;
  text: string;
  imageUrl: string;
  likes: number;
  comments: number;
  shares: number;
  url: string;
}

interface FacebookFeedData {
  pageName: string;
  username: string;
  followers: string;
  following: string;
  profilePic: string;
  coverPic: string;
  posts: FacebookPost[];
}

export default function NewsAndTestimonials() {
  const fbUrl = "https://www.facebook.com/officialrroshanbaig/";

  // Default initial fallback state
  const initialFeedData: FacebookFeedData = {
    pageName: "R. Roshan Baig",
    username: "officialrroshanbaig",
    followers: "162K Followers",
    following: "180 Following",
    profilePic: "https://graph.facebook.com/officialrroshanbaig/picture?type=large",
    coverPic: "/images/vidhana_soudha_bg_1779009062639.png",
    posts: [
      {
        id: "post_1",
        date: "May 15, 2024",
        text: "Deeply humbled by the warm reception during our constituency outreach. Discussing key developmental issues with our local merchants at Shivajinagar. Your trust and support continue to inspire me to work harder for the progress of our community. #ShivajinagarDevelopment #CommunityFirst #Karnataka",
        imageUrl: "/images/roshan baig/roshan baig 10.jpeg",
        likes: 1420,
        comments: 284,
        shares: 120,
        url: fbUrl
      },
      {
        id: "post_2",
        date: "May 12, 2024",
        text: "Education is the foundation of progress. Today, I had the privilege of interacting with students and faculty at the newly upgraded government school facility. Our priority remains to provide high-quality education and modern infrastructure for every child in our neighborhood. #EducationForAll #Empowerment",
        imageUrl: "/images/roshan baig/roshan baig 4.jpeg",
        likes: 950,
        comments: 142,
        shares: 68,
        url: fbUrl
      },
      {
        id: "post_3",
        date: "May 08, 2024",
        text: "Promoting inter-faith harmony and social unity. It was an honor to participate in the local community peace committee meeting. Unity in diversity is our greatest strength, and we must continue to build bridges of understanding and respect across all communities. #PeaceAndHarmony #TogetherWeCan",
        imageUrl: "/images/roshan baig/roshan baig 2.jpeg",
        likes: 1845,
        comments: 412,
        shares: 195,
        url: fbUrl
      },
      {
        id: "post_4",
        date: "May 03, 2024",
        text: "Reviewing the progress of minority welfare and infrastructure schemes. Our commitment to ensuring that every welfare policy reaches the grassroots level remains unshaken. Let us build a strong, inclusive society where no one is left behind. #WelfareState #InclusiveDevelopment",
        imageUrl: "/images/roshan baig/roshan baig 3.jpeg",
        likes: 1120,
        comments: 198,
        shares: 85,
        url: fbUrl
      }
    ]
  };

  // Main feed state, initially loading default values
  const [feedData, setFeedData] = useState<FacebookFeedData>(initialFeedData);
  // Track liked posts locally
  const [likedPosts, setLikedPosts] = useState<{ [key: string]: boolean }>({});
  // Share copy tooltip feedback
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Admin Modal States
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');

  // Form States for adding new posts and editing stats
  const [formFollowers, setFormFollowers] = useState(feedData.followers);
  const [formFollowing, setFormFollowing] = useState(feedData.following);
  const [newPostText, setNewPostText] = useState('');
  const [newPostImage, setNewPostImage] = useState('/images/roshan baig/roshan baig 6.jpeg');
  const [newPostDate, setNewPostDate] = useState('');

  // Fetch the latest saved JSON feed data on component mount
  useEffect(() => {
    fetch('/api/facebook')
      .then(res => {
        if (!res.ok) throw new Error('Database file could not be read');
        return res.json();
      })
      .then(data => {
        if (data && data.posts && Array.isArray(data.posts)) {
          setFeedData(data);
          setFormFollowers(data.followers);
          setFormFollowing(data.following);
        }
      })
      .catch(err => {
        console.warn('CORS/File API failed. Falling back to static initial data.', err);
      });
  }, []);

  // Set default date when admin modal opens
  useEffect(() => {
    if (isAdminOpen) {
      const today = new Date();
      const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
      setNewPostDate(today.toLocaleDateString('en-US', options));
    }
  }, [isAdminOpen]);

  // Testimonials state and auto-slider
  const testimonials = [
    {
      text: "A true leader who has always stood by the people. His dedication to the development of Shivajinagar is unmatched. He has been a pillar of strength for all communities.",
      name: "Abdul Rahman",
      role: "Community Leader, Shivajinagar",
      img: "/images/roshan baig/roshan baig 5.jpeg"
    },
    {
      text: "His contribution to education, especially minority welfare, schools, and colleges, is highly commendable. He paved the way for many underprivileged children to succeed.",
      name: "Dr. Shaheen Taj",
      role: "Educationist & Scholar",
      img: "/images/roshan baig/roshan baig 8.jpeg"
    },
    {
      text: "Shivajinagar witnessed unprecedented infrastructural growth under his tenure. The roads, street lighting, clinics, and community halls are a testament to his vision.",
      name: "K. Srinivas",
      role: "Social Worker & Resident",
      img: "/images/roshan baig/roshan baig 9.jpeg"
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Handles client-side Like count toggling
  const handleLike = (postId: string) => {
    setLikedPosts(prev => {
      const isAlreadyLiked = prev[postId];
      setFeedData(current => {
        const updatedPosts = current.posts.map(p =>
          p.id === postId ? { ...p, likes: isAlreadyLiked ? p.likes - 1 : p.likes + 1 } : p
        );
        const updatedData = { ...current, posts: updatedPosts };
        // Sync back to file storage if needed
        return updatedData;
      });
      return { ...prev, [postId]: !isAlreadyLiked };
    });
  };

  // Handles copying the direct link
  const handleShare = (e: React.MouseEvent, postId: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(fbUrl).then(() => {
      setCopiedId(postId);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  // Handles Admin unlocking
  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin') {
      setIsUnlocked(true);
      setLoginError('');
    } else {
      setLoginError('Invalid access key. Please try again.');
    }
  };

  // Handles publishing a new post from the Admin Panel
  const handlePublishPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    setSaveStatus('saving');

    // Create a new post object
    const newPost: FacebookPost = {
      id: 'post_' + Date.now(),
      date: newPostDate || 'Just now',
      text: newPostText,
      imageUrl: newPostImage || '/images/roshan baig/roshan baig 6.jpeg',
      likes: Math.floor(Math.random() * 500) + 150, // Generates realistic initial stats
      comments: Math.floor(Math.random() * 80) + 20,
      shares: Math.floor(Math.random() * 30) + 5,
      url: fbUrl
    };

    // Prepend new post and trim feed to keep exactly the 4 latest posts
    const updatedPosts = [newPost, ...feedData.posts].slice(0, 4);

    const updatedData: FacebookFeedData = {
      ...feedData,
      followers: formFollowers || feedData.followers,
      following: formFollowing || feedData.following,
      posts: updatedPosts
    };

    try {
      // POST the updated data to our App Router API endpoint
      const res = await fetch('/api/facebook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
      });

      if (!res.ok) throw new Error('API server returned error');

      // Update state instantly in UI
      setFeedData(updatedData);
      setSaveStatus('success');

      // Reset form fields
      setNewPostText('');
      
      // Auto close modal after brief delay
      setTimeout(() => {
        setIsAdminOpen(false);
        setSaveStatus('idle');
      }, 1500);

    } catch (err) {
      console.error('Failed to sync to database file:', err);
      // Still show in local memory so user sees it, but alert of database error
      setFeedData(updatedData);
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
    }
  };

  return (
    <section id="news" className="section-padding bg-cream relative overflow-hidden">
      {/* Decorative layout gradients */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] rounded-full bg-green/5 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] rounded-full bg-saffron/5 blur-3xl -z-10" />

      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* ======================================================== */}
          {/* LATEST NEWS & FACEBOOK FEED (Left Side - spans 2 columns) */}
          {/* ======================================================== */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Feed Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-gray-100 pb-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-[#1877f2]/10 border border-[#1877f2]/20 rounded-full px-4 py-1.5 relative group">
                  <span className="w-2 h-2 rounded-full bg-[#1877f2] animate-pulse" />
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#1877f2] flex items-center gap-1.5">
                    <FacebookIcon className="w-3 h-3" /> Live Facebook Updates
                  </span>
                  
                  {/* Subtle, beautiful gear icon to trigger Admin Modal */}
                  <button 
                    onClick={() => {
                      setIsAdminOpen(true);
                      setIsUnlocked(false);
                      setPassword('');
                      setLoginError('');
                    }}
                    className="ml-2 p-1 text-gray-400 hover:text-[#1877f2] transition-colors rounded-full hover:bg-[#1877f2]/10"
                    title="Feed Administration Panel"
                  >
                    <Settings className="w-3.5 h-3.5 animate-spin-slow" />
                  </button>
                </div>
                
                <h2 className="font-poppins text-3xl md:text-4xl font-black text-navy leading-tight">
                  News & Social Updates
                </h2>
                <p className="text-gray-500 font-inter text-sm max-w-xl">
                  Stay updated with the latest community initiatives, constituency visits, and developmental works of R. Roshan Baig, directly from his verified Facebook page.
                </p>
              </div>
              
              <a 
                href={fbUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-[#1877f2] text-white px-6 py-3 rounded-full font-poppins font-bold text-xs hover:bg-[#1565c0] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 group"
              >
                <FacebookIcon className="w-4 h-4 fill-white" />
                <span>Visit Facebook Page</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Post-wise 4 Latest Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {feedData.posts.map((post, i) => {
                const isLiked = likedPosts[post.id];
                return (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -6 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col group cursor-pointer transition-all duration-300 hover:shadow-[0_20px_40px_rgba(10,42,102,0.08)]"
                    onClick={() => window.open(post.url, '_blank')}
                  >
                    {/* Post Header */}
                    <div className="p-4 flex items-center justify-between border-b border-gray-50">
                      <div className="flex items-center gap-3">
                        {/* DP loaded from live redirect graph API */}
                        <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-green/20 bg-gray-100">
                          <Image 
                            src={feedData.profilePic} 
                            alt="R. Roshan Baig profile" 
                            fill 
                            className="object-cover"
                            unoptimized // Important: allows graph.facebook redirect to load seamlessly
                          />
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-poppins font-bold text-navy text-xs tracking-wide">
                              {feedData.pageName}
                            </h4>
                            <VerifiedBadge />
                          </div>
                          <div className="flex items-center gap-1 text-[10px] text-gray-400 font-inter mt-0.5">
                            <span>{post.date}</span>
                            <span>•</span>
                            <Globe className="w-3 h-3 text-gray-400" />
                          </div>
                        </div>
                      </div>
                      
                      <span className="text-[#1877f2] opacity-80 hover:opacity-100 transition-opacity">
                        <FacebookIcon className="w-5 h-5" />
                      </span>
                    </div>

                    {/* Post Text Description */}
                    <div className="px-5 pt-3.5 pb-2 flex-grow">
                      <p className="font-inter text-gray-600 text-xs leading-relaxed line-clamp-3 group-hover:text-gray-800 transition-colors">
                        {post.text}
                      </p>
                    </div>

                    {/* Post Media Image - Full Aspect Ratio Preservation (No Cropping) */}
                    <div className="relative w-full overflow-hidden bg-gray-50 flex items-center justify-center border-y border-gray-100 min-h-[220px]">
                      <img 
                        src={post.imageUrl} 
                        alt="Facebook update attachment" 
                        className="w-full h-auto max-h-[400px] object-contain transition-transform duration-700 group-hover:scale-[1.02]" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Hover overlay indicator */}
                      <div className="absolute inset-0 bg-navy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <span className="bg-white/95 text-navy font-poppins text-[10px] font-bold tracking-wider uppercase px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-auto">
                          <ExternalLink className="w-3 h-3 text-green" /> View On Facebook
                        </span>
                      </div>
                    </div>

                    {/* Interaction Bar */}
                    <div className="px-4 py-2.5 border-b border-gray-50 flex items-center justify-between text-[11px] text-gray-400 font-inter font-medium bg-gray-50/30">
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center -space-x-1">
                          <span className="w-4 h-4 rounded-full bg-[#1877f2] flex items-center justify-center text-white ring-1 ring-white">
                            <ThumbsUp className="w-2.5 h-2.5 fill-current" />
                          </span>
                          <span className="w-4 h-4 rounded-full bg-[#e91e63] flex items-center justify-center text-white ring-1 ring-white">
                            <Heart className="w-2.5 h-2.5 fill-current" />
                          </span>
                        </div>
                        <span className="hover:underline">{post.likes.toLocaleString()} Reactions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="hover:underline">{post.comments} Comments</span>
                        <span>•</span>
                        <span className="hover:underline">{post.shares} Shares</span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="p-1 flex items-center justify-around text-xs font-poppins font-bold text-gray-500 bg-white">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(post.id);
                        }}
                        className={`flex-1 py-2 px-1 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors ${
                          isLiked ? 'text-[#1877f2] font-extrabold' : 'hover:text-navy'
                        }`}
                      >
                        <ThumbsUp className={`w-4 h-4 ${isLiked ? 'fill-[#1877f2] animate-bounce' : ''}`} />
                        <span>Like</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(post.url, '_blank');
                        }}
                        className="flex-1 py-2 px-1 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 hover:text-green transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Comment</span>
                      </button>

                      <div className="flex-1 relative">
                        <button
                          onClick={(e) => handleShare(e, post.id)}
                          className="w-full py-2 px-1 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 hover:text-saffron transition-colors"
                        >
                          <Share2 className="w-4 h-4" />
                          <span>Share</span>
                        </button>
                        
                        <AnimatePresence>
                          {copiedId === post.id && (
                            <motion.span
                              initial={{ opacity: 0, y: 10, x: "-50%" }}
                              animate={{ opacity: 1, y: -30, x: "-50%" }}
                              exit={{ opacity: 0 }}
                              className="absolute top-0 left-1/2 bg-navy text-white text-[9px] px-2 py-1 rounded shadow-lg whitespace-nowrap z-20 font-inter pointer-events-none"
                            >
                              Link Copied!
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ======================================================== */}
          {/* TESTIMONIALS & SIDE WIDGETS (Right Side - spans 1 column) */}
          {/* ======================================================== */}
          <div className="lg:col-span-1 space-y-8 lg:sticky lg:top-28">
            
            {/* Testimonials Block */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 bg-saffron/10 border border-saffron/20 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green" />
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-saffron">TESTIMONIALS</span>
                </div>
                <h2 className="font-poppins text-2xl md:text-3xl font-black text-navy leading-tight">
                  Voices Of The People
                </h2>
              </div>

              <div className="bg-white rounded-3xl p-7 md:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.02)] border border-gray-100 relative overflow-hidden h-[340px] flex flex-col justify-between group">
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-green via-saffron to-green" />

                <span className="text-8xl text-gray-50 font-serif leading-none absolute top-4 left-5 select-none font-bold group-hover:text-green-light/30 transition-colors duration-500">&ldquo;</span>

                <div className="relative z-10 flex-grow pt-8 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 flex flex-col justify-between"
                    >
                      <p className="font-inter text-gray-500 text-[13px] md:text-sm italic leading-relaxed">
                        {testimonials[activeTestimonial].text}
                      </p>
                      
                      <div className="flex items-center gap-4 border-t border-gray-50 pt-5 mt-auto">
                        <div className="w-12 h-12 rounded-2xl overflow-hidden relative bg-gray-100 shadow-sm ring-2 ring-green/10 shrink-0">
                          <Image 
                            src={testimonials[activeTestimonial].img} 
                            alt={testimonials[activeTestimonial].name} 
                            fill 
                            className="object-cover" 
                          />
                        </div>
                        <div>
                          <h4 className="font-poppins font-bold text-navy text-sm">
                            {testimonials[activeTestimonial].name}
                          </h4>
                          <p className="font-inter text-gray-400 text-[9px] uppercase tracking-wider font-semibold">
                            {testimonials[activeTestimonial].role}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Pagination Dots */}
                <div className="flex items-center justify-center gap-2 mt-4 z-10 pt-2 border-t border-gray-50">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeTestimonial === index 
                          ? "w-6 bg-gradient-to-r from-green to-saffron" 
                          : "w-2 bg-gray-200 hover:bg-gray-300"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* FACEBOOK EMBED WIDGET (Symmetrical Height Balancer) */}
            {/* ======================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)]"
            >
              {/* Cover Banner Mock */}
              <div className="relative h-24 bg-gradient-to-r from-green via-saffron to-navy flex items-center justify-end px-4 overflow-hidden">
                <Image 
                  src={feedData.coverPic} 
                  alt="Vidhana Soudha Background Banner" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <FacebookIcon className="w-16 h-16 text-white/10 absolute left-4 -bottom-4 rotate-12" />
                
                {/* Connection Status Badge */}
                <span className="relative z-10 flex items-center gap-1.5 bg-black/40 text-[9px] font-bold text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" /> Live Page
                </span>
              </div>

              {/* Profile Details Area */}
              <div className="px-6 pb-6 pt-0 relative flex flex-col">
                {/* Live Avatar */}
                <div className="relative -mt-10 mb-2.5 w-16 h-16 rounded-2xl overflow-hidden border-[3px] border-white shadow-md bg-white">
                  <Image 
                    src={feedData.profilePic} 
                    alt="R. Roshan Baig Page Profile Picture" 
                    fill 
                    className="object-cover"
                    unoptimized // Important: allows graph.facebook redirect to load seamlessly
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center flex-wrap">
                    <h3 className="font-poppins font-black text-navy text-base leading-tight">
                      {feedData.pageName}
                    </h3>
                    <VerifiedBadge />
                  </div>
                  <p className="text-[10px] text-gray-400 font-inter font-semibold tracking-wider">
                    @{feedData.username}
                  </p>
                  <p className="text-[11px] text-gray-500 font-inter pt-1">
                    Official public profile of R. Roshan Baig. Representative of Shivajinagar. Former State Minister.
                  </p>
                  
                  {/* Dynamically editable follower/following display */}
                  <div className="flex items-center gap-2.5 text-[11px] text-gray-400 font-inter font-semibold pt-2.5">
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-3.5 h-3.5 text-[#1877f2] fill-current" /> 
                      {feedData.followers}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-200" />
                    <span className="text-gray-500 font-bold">
                      {feedData.following}
                    </span>
                  </div>
                </div>

                {/* Follow CTA Button */}
                <a
                  href={fbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full bg-[#1877f2] hover:bg-[#1565c0] text-white text-xs font-poppins font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <FacebookIcon className="w-4 h-4 fill-white" />
                  Follow Page
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* ======================================================== */}
      {/* FULL FEED CONTROLLER MODAL (Admin Panel Content Manager) */}
      {/* ======================================================== */}
      <AnimatePresence>
        {isAdminOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-w-lg w-full max-h-[90vh] flex flex-col relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsAdminOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-navy hover:bg-gray-50 p-2 rounded-full transition-all z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Password Locking Phase */}
              {!isUnlocked ? (
                <div className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#1877f2]/10 text-[#1877f2] flex items-center justify-center mx-auto">
                    <Lock className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-poppins font-extrabold text-xl text-navy">
                      Admin Access Required
                    </h3>
                    <p className="text-xs text-gray-500 font-inter max-w-xs mx-auto">
                      Enter your access key to add new Facebook posts and edit live stats.
                    </p>
                  </div>

                  <form onSubmit={handleUnlock} className="space-y-4">
                    <input 
                      type="password"
                      placeholder="Access Key (Default: admin)"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#1877f2]/20 focus:border-[#1877f2] text-center tracking-widest text-navy font-bold"
                      autoFocus
                    />
                    {loginError && (
                      <p className="text-[11px] text-red-500 font-bold font-inter bg-red-50 py-1.5 rounded-lg">
                        {loginError}
                      </p>
                    )}
                    <button 
                      type="submit"
                      className="w-full bg-[#1877f2] hover:bg-[#1565c0] text-white py-3 rounded-xl font-poppins font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
                    >
                      <Unlock className="w-3.5 h-3.5" /> Unlock Editor
                    </button>
                  </form>
                </div>
              ) : (
                // Unlocked Editor Form
                <div className="flex flex-col h-full">
                  {/* Header Banner */}
                  <div className="bg-gradient-to-r from-green via-saffron to-navy p-6 text-white relative">
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <FacebookIcon className="w-5 h-5 fill-white" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-black text-base">
                          Facebook Feed Manager
                        </h3>
                        <p className="text-[10px] text-white/80 font-inter font-semibold uppercase tracking-wider">
                          Publish Live Posts & Stats
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Form Container */}
                  <form onSubmit={handlePublishPost} className="p-6 overflow-y-auto space-y-6 flex-grow max-h-[60vh] scrollbar-thin">
                    
                    {/* Live Stats Section */}
                    <div className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100 space-y-4">
                      <h4 className="font-poppins font-bold text-navy text-xs tracking-wider uppercase flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green" /> Edit Social Metrics
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-500 font-poppins uppercase">Followers Count</label>
                          <input 
                            type="text" 
                            value={formFollowers}
                            onChange={(e) => setFormFollowers(e.target.value)}
                            placeholder="e.g. 162K Followers"
                            className="w-full px-4 py-2 border border-gray-200 rounded-xl text-xs font-inter focus:outline-none focus:ring-1 focus:ring-green focus:border-green"
                            required
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-500 font-poppins uppercase">Following Count</label>
                          <input 
                            type="text" 
                            value={formFollowing}
                            onChange={(e) => setFormFollowing(e.target.value)}
                            placeholder="e.g. 180 Following"
                            className="w-full px-4 py-2 border border-gray-200 rounded-xl text-xs font-inter focus:outline-none focus:ring-1 focus:ring-green focus:border-green"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Publish New Post Section */}
                    <div className="space-y-4">
                      <h4 className="font-poppins font-bold text-navy text-xs tracking-wider uppercase flex items-center gap-1">
                        <Plus className="w-4 h-4 text-[#1877f2]" /> Publish New Facebook Post
                      </h4>
                      
                      {/* Caption/Description textarea */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-500 font-poppins uppercase">Post Caption / Description</label>
                        <textarea 
                          rows={3}
                          value={newPostText}
                          onChange={(e) => setNewPostText(e.target.value)}
                          placeholder="Type what you posted on Facebook here... Use hashtags like #ShivajinagarDevelopment #RoshanBaig"
                          className="w-full px-4 py-3 border border-gray-200 rounded-2xl text-xs font-inter focus:outline-none focus:ring-1 focus:ring-[#1877f2] focus:border-[#1877f2]"
                          required
                        />
                      </div>

                      {/* Date & Preset/Upload Images */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-500 font-poppins uppercase">Post Date</label>
                          <input 
                            type="text"
                            value={newPostDate}
                            onChange={(e) => setNewPostDate(e.target.value)}
                            placeholder="e.g. May 17, 2026"
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs font-inter focus:outline-none focus:ring-1 focus:ring-[#1877f2] focus:border-[#1877f2]"
                            required
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-500 font-poppins uppercase flex items-center gap-1">
                            <ImageIcon className="w-3.5 h-3.5 text-gray-400" /> Image Path / URL
                          </label>
                          <select 
                            value={newPostImage}
                            onChange={(e) => setNewPostImage(e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs font-inter focus:outline-none focus:ring-1 focus:ring-[#1877f2] focus:border-[#1877f2] bg-white cursor-pointer"
                          >
                            <option value="/images/roshan baig/roshan baig 6.jpeg">Image 6 (Default Outreach)</option>
                            <option value="/images/roshan baig/roshan baig 7.jpeg">Image 7 (Inauguration Banner)</option>
                            <option value="/images/roshan baig/roshan baig 8.jpeg">Image 8 (Scholarly Panel)</option>
                            <option value="/images/roshan baig/roshan baig 9.jpeg">Image 9 (Shivajinagar Streets)</option>
                            <option value="/images/roshan baig/roshan baig 10.jpeg">Image 10 (Local Merchants)</option>
                            <option value="/images/roshan baig/roshan baig 2.jpeg">Image 2 (Community Peace)</option>
                            <option value="/images/roshan baig/roshan baig 3.jpeg">Image 3 (Minority Schemes)</option>
                            <option value="/images/roshan baig/roshan baig 4.jpeg">Image 4 (Education Visit)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Notification message details */}
                    <p className="text-[9.5px] text-gray-400 font-inter italic leading-normal">
                      * Publishing will automatically insert this post at the top of the timeline. The oldest post will be pruned to maintain a clean layout showing exactly the **4 latest posts**.
                    </p>

                    {/* Status Feedback */}
                    {saveStatus === 'success' && (
                      <div className="p-3 bg-green-50 text-green-700 text-xs font-poppins font-bold rounded-xl text-center flex items-center justify-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" /> Live Feed Updated Successfully!
                      </div>
                    )}
                    {saveStatus === 'error' && (
                      <div className="p-3 bg-red-50 text-red-700 text-xs font-poppins font-bold rounded-xl text-center">
                        Sync error, saved to local cache memory only!
                      </div>
                    )}

                    {/* Action buttons */}
                    <div className="pt-2 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setIsAdminOpen(false)}
                        className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-500 font-poppins font-bold text-xs hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={saveStatus === 'saving'}
                        className="flex-1 bg-[#1877f2] hover:bg-[#1565c0] disabled:bg-[#1877f2]/50 text-white py-3 rounded-xl font-poppins font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
                      >
                        <Save className="w-3.5 h-3.5" /> 
                        {saveStatus === 'saving' ? 'Publishing...' : 'Publish to Website'}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
