import Link from 'next/link';
import { Experience } from '@/lib/data';

export function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <article className="card">
      <div className="cardImage" style={{ backgroundImage: `url(${exp.image})` }}>
        <span className="pill">{exp.badges[0]}</span>
      </div>
      <div className="cardBody">
        <div className="row space"><strong>{exp.location}</strong><span>⭐ {exp.rating}</span></div>
        <h3>{exp.title}</h3>
        <p>{exp.type} • {exp.duration} • {exp.capacity}</p>
        <p className="muted">{exp.species.join(' • ')}</p>
        <div className="row space bottom"><strong>R$ {exp.price.toLocaleString('pt-BR')}</strong><Link className="smallButton" href={`/experiencia/${exp.id}`}>Ver detalhes</Link></div>
      </div>
    </article>
  );
}
