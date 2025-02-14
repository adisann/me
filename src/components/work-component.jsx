export const WorkComponent = ({ title, duration, location, typeOfWork, dateOfWork, jobDesc, tags }) => {
  return (
    <div className="rounded-xl border text-card-foreground shadow p-6 backdrop-blur-xl bg-card/50 border-primary/10">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="">{duration}</p>
          <p className="text-sm text-muted-foreground">
            {location} ({typeOfWork})
          </p>
        </div>
        <p className="text-sm text-muted-foreground">{dateOfWork}</p>
      </div>
      <ul className="space-y-2 text-muted-foreground ml-4">
        {jobDesc.map((item, index) => (
          <li key={index} className="flex">
            <span className="mr-2">•</span>
            <span className="flex-1">{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((item, index) => (
          <div key={index} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground bg-primary/5">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
