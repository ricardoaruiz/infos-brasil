import { AppMenuItem } from './components/AppMenuItem'
import * as S from './styles'

type MenuProps = {
  title?: string
}

export const AppMenu = ({ title }: MenuProps) => {
  return (
    <>
      {title && <S.MenuTitle>{title}</S.MenuTitle>}
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
