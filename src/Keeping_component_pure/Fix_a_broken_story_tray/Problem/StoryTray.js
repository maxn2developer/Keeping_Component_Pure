export default function StoryTray({ stories }) {
  stories.push({
    id: "create",
    label: "Create Story"
  });

  return (
    <div className="storyProblem">
      <ul>
        {stories.map((story) => (
          <li key={story.id}>{story.label}</li>
        ))}
      </ul>
    </div>
  );
}
