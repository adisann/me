export const ProjectComponent = ({ title, image, type, description, tags, github, demo }) => {
  return (
    <div className="h-full">
      <div className="bg-card rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
        <div className="relative h-48">
          <img src={image} alt={title} />
        </div>
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <div className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs mb-2">{type}</div>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((item, index) => (
              <span key={index} className="inline-flex items-center rounded-full font-medium border border-gray-500 text-xs px-2 py-1">
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-4 pt-2">
            {github !== '' ? (
              <a
                href={github}
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex border border-gray-100   items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
              >
                GitHub
              </a>
            ) : (
              ''
            )}

            {demo !== '' ? (
              <a
                href={demo}
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 text-white bg-gray-950 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
              >
                Demo
              </a>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
