export const CertificateComponent = ({ title, image, institution, issuedAt }) => {
  return (
    <div className="relative">
      <div className="rounded-xl border text-card-foreground shadow p-6 backdrop-blur-xl bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
        <div className="flex flex-col gap-4">
          <a className="flex items-start gap-4" target="_blank" rel="noopener noreferrer">
            <img src={image} alt={title} className="max-w-[60px] h-auto" />
            <div>
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{institution}</p>
              <p className="text-sm text-muted-foreground">Issued at: {issuedAt}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
