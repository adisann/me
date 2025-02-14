export const SkillComponent = ({ title, icon, skills }) => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-purple-500/10 ">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div key={index} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold  transition-transform">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};
