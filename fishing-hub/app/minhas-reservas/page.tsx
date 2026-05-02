import { Header } from '@/components/Header';
import { reservations } from '@/lib/data';
export default function Reservas(){return <><Header/><main className="page"><h1>Minhas reservas</h1><table className="table"><thead><tr><th>Código</th><th>Pescaria</th><th>Data</th><th>Guia</th><th>Status</th><th>Valor</th></tr></thead><tbody>{reservations.map(r=><tr key={r.id}><td>{r.id}</td><td>{r.title}</td><td>{r.date}</td><td>{r.guide}</td><td className="status">{r.status}</td><td>R$ {r.price.toLocaleString('pt-BR')}</td></tr>)}</tbody></table></main></>}
