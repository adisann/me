export const EducationComponent = ({ degree, duration, institution, achievements, organizations, gpa }) => {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
          <div>
            <h3 className="font-semibold text-lg">{degree}</h3>
            <p className="text-muted-foreground">{institution}</p>
          </div>
          <div className="text-right mt-1 md:mt-0">
            <p className="text-sm text-muted-foreground">{duration}</p>
            <p className="text-sm font-medium text-primary">GPA: {gpa}</p>
          </div>
        </div>
        <div className="mt-3">
          {achievements.map((item, index) => (
            <div key={index} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground bg-primary/5 mb-2">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium mb-2">Activities and Organizations</p>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1  ml-2">
            {organizations.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
