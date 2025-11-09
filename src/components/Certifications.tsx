import React, { useState } from "react";

type CertModal = "google" | "aws" | null;

const certs = [
    {
        id: "html-css",
        year: "2023",
        org: "Local Training",
        title: "HTML & CSS Fundamentals",
        fullTitle: "HTML & CSS Fundamentals Certificate",
        description:
            "Comprehensive course covering the basics of HTML and CSS for web development.",
        modalDescription:
            "Completed a hands-on course focusing on building responsive web pages using HTML and CSS, including layout techniques and styling best practices.",
        image: "HTML-CSS.png", // Update with your local image path
        highlights: [
            "Built multiple responsive web pages from scratch.",
            "Learned about semantic HTML and CSS Flexbox/Grid.",
            "Credential ID HTML-CSS-2023-001.",
        ],
        credentialUrl: "#", // No online link available
        credentialLabel: "View Credential",
        verifiedLabel: "Verified by Local Training",
        verifiedIcon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check-circle-2"
            >
                <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
                <path d="m9 12 2 2 4-4"></path>
            </svg>
        ),
        tags: [
            {
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check-circle text-primary"
                    >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                ),
                label: "Credential Verified",
            },
            {
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-mouse-pointer"
                    >
                        <path d="m3 3 7 7-4 4 7 7 8-8-7-7"></path>
                        <path d="M14 7l3-3"></path>
                    </svg>
                ),
                label: "Tap to view more",
                highlight: true,
            },
        ],
        cardIcon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-award w-8 h-8 text-primary"
            >
                <path d="M12 15l-3.5 3.5"></path>
                <path d="m12 15 3.5 3.5"></path>
                <circle cx="12" cy="8" r="6"></circle>
            </svg>
        ),
    },
    // Existing certifications (google, aws) can remain here
];

const Certifications: React.FC = () => {
    const [modal, setModal] = useState<CertModal>(null);

    return (
        <>
            <section id="certifications" className="py-20 bg-muted/40">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 animate-slide-up">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                            Certifications &amp; <span className="text-gradient">Achievements</span>
                        </h2>
                        <div className="section-divider w-24 mx-auto"></div>
                        <p className="text-muted-foreground mt-4 font-body">
                            A snapshot of the credentials I actively use in my projects
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {certs.map((c, idx) => (
                            <div
                                key={c.id}
                                className="glass-card p-8 rounded-lg glow-effect hover:-translate-y-1 transition-all duration-300 animate-slide-up cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                role="button"
                                tabIndex={0}
                                aria-label={`Open ${c.title} certificate details`}
                                style={{ animationDelay: `${idx * 100}ms` }}
                                onClick={() => setModal(c.id as CertModal)}
                                onKeyDown={e => {
                                    if (e.key === "Enter" || e.key === " ") setModal(c.id as CertModal);
                                }}
                            >
                                <div className="bg-gradient-to-br from-primary/15 to-primary/5 p-4 rounded-lg w-fit mb-4">
                                    {c.cardIcon}
                                </div>
                                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-body">
                                    {c.year} · {c.org}
                                </p>
                                <h3 className="text-2xl font-heading font-semibold mt-3 mb-2">{c.title}</h3>
                                <p className="text-muted-foreground font-body">{c.description}</p>
                                <div className="flex flex-wrap gap-3 mt-4 text-sm font-body text-foreground/80">
                                    {c.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className={`inline-flex items-center gap-1 ${tag.highlight ? "text-primary font-semibold" : ""}`}
                                        >
                                            {tag.icon}
                                            {tag.label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {modal && (
                <div
                    className="cert-modal fixed inset-0 z-[120] flex items-center justify-center bg-background/80 backdrop-blur-sm px-4"
                    aria-modal="true"
                    role="dialog"
                    aria-labelledby={`cert-${modal}-title`}
                    tabIndex={-1}
                    onClick={() => setModal(null)}
                >
                    <div
                        className="relative w-full max-w-2xl rounded-2xl bg-card p-8 shadow-2xl border border-border/60"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground hover:text-primary transition-colors"
                            aria-label="Close certificate modal"
                            onClick={() => setModal(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                        </button>
                        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground font-body">
                            <span>{certs.find(c => c.id === modal)?.year}</span>
                            <span className="h-1 w-1 rounded-full bg-muted-foreground"></span>
                            <span>{certs.find(c => c.id === modal)?.org}</span>
                        </div>
                        <h3 id={`cert-${modal}-title`} className="mt-4 text-3xl font-heading font-bold">
                            {certs.find(c => c.id === modal)?.fullTitle}
                        </h3>
                        <p className="mt-3 text-muted-foreground font-body">
                            {certs.find(c => c.id === modal)?.modalDescription}
                        </p>
                        <div className="mt-6 rounded-2xl border border-border/60 bg-muted/40 p-4">
                            <img
                                src={certs.find(c => c.id === modal)?.image}
                                alt={`${certs.find(c => c.id === modal)?.title} certificate preview`}
                                className="w-full max-h-[520px] rounded-xl object-contain bg-background"
                                loading="lazy"
                            />
                        </div>
                        <ul className="mt-6 space-y-3 text-sm font-body text-foreground/90">
                            {certs
                                .find(c => c.id === modal)
                                ?.highlights.map((h, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            {i + 1}
                                        </span>
                                        <div>{h}</div>
                                    </li>
                                ))}
                        </ul>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href={certs.find(c => c.id === modal)?.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2 text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-body"
                            >
                                {certs.find(c => c.id === modal)?.credentialLabel}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-arrow-up-right">
                                    <path d="M7 17 17 7"></path>
                                    <path d="M7 7h10v10"></path>
                                </svg>
                            </a>
                            <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-body text-primary">
                                {certs.find(c => c.id === modal)?.verifiedIcon}
                                {certs.find(c => c.id === modal)?.verifiedLabel}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Certifications;
