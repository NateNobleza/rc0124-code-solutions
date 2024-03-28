import { useState } from 'react';
import TopicCard from './TopicCard';

type Topic = {
  id: number;
  title: string;
  content: string;
};

type AccordionProps = {
  topics: Topic[];
};

export function Accordion({ topics }: AccordionProps) {
  const [openTopic, setOpenTopic] = useState<number | null>(null);

  const handleTopicClick = (topicId: number): void => {
    setOpenTopic((prevOpenTopic) =>
      prevOpenTopic === topicId ? null : topicId
    );
  };

  return (
    <div>
      {topics.map(({ id, title, content }: Topic) => (
        <TopicCard
          key={id}
          topic={{ id, title, content }}
          isOpen={openTopic === id}
          onClick={() => handleTopicClick(id)}
        />
      ))}
    </div>
  );
}
