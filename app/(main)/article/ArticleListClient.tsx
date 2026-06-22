"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Category, Tag } from "@/lib/types";
import { getList as getCategories } from "@/lib/api/category";
import { getList as getTags } from "@/lib/api/tag";
import ArticleList from "@/app/_components/article/ArticleList";

export default function ArticlePage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [categoryId, setCategoryId] = useState<number | undefined>();
  const [tagId, setTagId] = useState<number | undefined>();
  const [keyword, setKeyword] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "pinned">("all");

  useEffect(() => {
    getCategories().then((data) =>
      setCategories(data.rows.filter((c: { type: string }) => c.type === "ARTICLE"))
    ).catch(() => {});
    getTags().then((data) => setTags(data.rows)).catch(() => {});
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-3">
  
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Articles
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              探索技术，分享思考，记录成长
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex gap-2 mb-8"
      >
        <button
          onClick={() => setActiveTab("all")}
          className={`px-5 py-2.5 rounded-xl font-medium transition-all ${
            activeTab === "all"
              ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/30"
              : "bg-white/30 dark:bg-slate-800/30 text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800/50"
          }`}
        >
          全部文章
        </button>
        <button
          onClick={() => setActiveTab("pinned")}
          className={`px-5 py-2.5 rounded-xl font-medium transition-all ${
            activeTab === "pinned"
              ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/30"
              : "bg-white/30 dark:bg-slate-800/30 text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800/50"
          }`}
        >
          精选推荐
        </button>
      </motion.div>

      {/* Search & Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="搜索文章..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full px-5 py-3.5 pl-12 rounded-2xl bg-white/30 dark:bg-slate-800/30 backdrop-blur-md border border-white/40 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Categories */}
        {categories.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">分类筛选</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategoryId(undefined)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  categoryId === undefined
                    ? "bg-indigo-500 text-white shadow-md"
                    : "bg-white/30 dark:bg-slate-800/30 text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800/50"
                }`}
              >
                全部
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoryId(cat.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    categoryId === cat.id
                      ? "bg-indigo-500 text-white shadow-md"
                      : "bg-white/30 dark:bg-slate-800/30 text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800/50"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">标签筛选</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setTagId(undefined)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  tagId === undefined
                    ? "bg-purple-500 text-white shadow-md"
                    : "bg-white/30 dark:bg-slate-800/30 text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800/50"
                }`}
              >
                全部标签
              </button>
              {tags.slice(0, 10).map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => setTagId(tag.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    tagId === tag.id
                      ? "bg-purple-500 text-white shadow-md"
                      : "bg-white/30 dark:bg-slate-800/30 text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800/50"
                  }`}
                >
                  #{tag.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Article List */}
      <ArticleList
        categoryId={categoryId}
        tagId={tagId}
        keyword={keyword}
        showPinnedOnly={activeTab === "pinned"}
      />
    </div>
  );
}