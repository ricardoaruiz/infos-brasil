import { AppMenuItem } from './components/AppMenuItem'

type MenuProps = {
  title?: string
}

export const AppMenu = ({ title }: MenuProps) => {
  return (
    <>
      {title && <p className="text-2xl font-bold text-center">{title}</p>}
      <ul>
        <AppMenuItem to="/bancos">Bancos</AppMenuItem>
        <AppMenuItem to="/cep">CEP</AppMenuItem>
        <AppMenuItem to="/cnpj">CNPJ</AppMenuItem>
        <AppMenuItem to="/ddd">DDD</AppMenuItem>
        <AppMenuItem to="/feriados">Feriados Nacionais</AppMenuItem>
        <AppMenuItem to="/fipe">FIPE</AppMenuItem>
        <AppMenuItem to="/ibge">IBGE</AppMenuItem>
        <AppMenuItem to="/registro">Registro BR</AppMenuItem>
      </ul>
    </>
  )
}
