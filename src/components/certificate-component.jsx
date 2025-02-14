export const CertificateComponent = ({ title, image, intitution, issuedAt }) => {
  return (
    <div className="relative">
      <div className="rounded-xl border text-card-foreground shadow p-6 backdrop-blur-xl bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
        <div className="flex flex-col gap-4">
          <a className="flex items-start gap-4" target="_blank" rel="noopener noreferrer">
            <img src={image} alt={title} />
            <div>
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{intitution}</p>
              <p className="text-sm text-muted-foreground">{issuedAt}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
