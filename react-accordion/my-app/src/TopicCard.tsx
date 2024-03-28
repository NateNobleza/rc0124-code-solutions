type Topic = {
  id: number;
  title: string;
  content: string;
};
type TopicCardProps = {
  topic: Topic;
  isOpen: boolean;
  onClick: () => void;
};

function TopicCard({ topic, isOpen, onClick }: TopicCardProps) {
  return (
    <div className="topic-card">
      <div className="topic-title" onClick={onClick}>
        {topic.title}
      </div>
      {isOpen && <div className="topic-content">{topic.content}</div>}
    </div>
  );
}

export default TopicCard;
