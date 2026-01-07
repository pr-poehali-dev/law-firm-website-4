import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface BlogArticleProps {
  title: string;
  onBack: () => void;
  children: React.ReactNode;
}

const BlogArticle = ({ title, onBack, children }: BlogArticleProps) => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-8"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Назад к блогу
        </Button>
        
        <h1 className="text-4xl md:text-5xl mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
          {title}
        </h1>
        
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
