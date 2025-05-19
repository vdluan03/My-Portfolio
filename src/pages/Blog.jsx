import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useParams } from "react-router-dom";
import { Heart, MessageCircle, Share2 } from "lucide-react";

export const Blog = () => {
  const { slug } = useParams();
  const posts = [
    {
      title: "Nguyễn Vương Dã Bẹc",
      content: "Bẹc bếu là đồ coan hêu",
      category: "my-journey",
      timeAgo: "2 days ago",
    },
    {
      title: "Nguyễn Vương Dã Bẹc",
      content: "Bẹc bếu là đồ coan hêu",
      category: "my-journey",
      timeAgo: "1 week ago",
    },
    {
      title: "Nguyễn Vương Dã Bẹc",
      content: "Bẹc bếu là đồ coan hêu",
      category: "my-journey",
      timeAgo: "3 hours ago",
    },
  ];

  const filteredPost = slug ? posts.filter((post) => post.category === slug) : [];
  console.log(filteredPost);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <div className="pt-20">
        <main className="container mx-auto px-4 py-8">
          {filteredPost.length > 0 ? (
            <div className="space-y-6">
              {filteredPost.map((post, index) => (
                <div
                  key={index}
                  className="p-6 border border-border rounded-md shadow-sm bg-card text-foreground mx-auto"
                  style={{ maxWidth: "794px", maxHeight: "1123px" }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-primary">JIRA</span>
                      <span className="text-xs text-muted-foreground">
                        • {post.timeAgo}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-muted-foreground mb-4">{post.content}</p>
                  <div className="flex items-center space-x-4 text-muted-foreground">
                    <button className="flex items-center space-x-1 hover:text-red-500 transition">
                      <Heart className="w-5 h-5" />
                      <span>Thả tim</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-primary transition">
                      <MessageCircle className="w-5 h-5" />
                      <span>Bình luận</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-green-500 transition">
                      <Share2 className="w-5 h-5" />
                      <span>Chia sẻ</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              {slug
                ? "Không tìm thấy bài viết nào trong chuyên mục này."
                : "Chào mừng đến với Blog!"}
            </p>
          )}
        </main>

      </div>
      <Footer />
    </div>
  );
};