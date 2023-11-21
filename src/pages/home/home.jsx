import DataTable from "../../components/table"
import style from './style.module.css'

const columns = [
  {
    title: 'Titulo',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Categoria',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Valor',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: 'Responsável',
    key: 'responsiblePerson',
    dataIndex: 'responsiblePerson'
  },
  {
    title: 'Tipo da transação',
    key: 'typeTransaction',
    dataIndex: 'typeTransaction'
  },
  {
    title: 'Data',
    key: 'date',
    dataIndex: 'date'
  },
]

const data = [
  {
    title: 'Compra de Material de Escritório',
    category: 'Material de Escritório',
    value: 120.50,
    responsiblePerson: 'João Silva',
    typeTransaction: 'Débito',
    date: '2023-11-01',
  },
  {
    title: 'Pagamento de Conta de Energia',
    category: 'Despesa Fixa',
    value: 200.00,
    responsiblePerson: 'Maria Oliveira',
    typeTransaction: 'Débito Automático',
    date: '2023-11-05',
  },
  {
    title: 'Venda de Produto',
    category: 'Venda',
    value: 500.00,
    responsiblePerson: 'Carlos Santos',
    typeTransaction: 'Crédito',
    date: '2023-11-10',
  },
  {
    title: 'Manutenção de Equipamento',
    category: 'Manutenção',
    value: 300.00,
    responsiblePerson: 'Ana Costa',
    typeTransaction: 'Débito',
    date: '2023-11-15',
  },
  {
    title: 'Salário',
    category: 'Receita Fixa',
    value: 2500.00,
    responsiblePerson: 'Pedro Oliveira',
    typeTransaction: 'Crédito',
    date: '2023-11-20',
  },
  {
    title: 'Compra de Software',
    category: 'Tecnologia',
    value: 150.00,
    responsiblePerson: 'Fernanda Lima',
    typeTransaction: 'Débito',
    date: '2023-11-25',
  },
  {
    title: 'Reembolso de Despesas',
    category: 'Reembolso',
    value: 80.00,
    responsiblePerson: 'Rodrigo Silva',
    typeTransaction: 'Crédito',
    date: '2023-11-28',
  },
  {
    title: 'Pagamento de Aluguel',
    category: 'Despesa Fixa',
    value: 1000.00,
    responsiblePerson: 'Camila Costa',
    typeTransaction: 'Débito Automático',
    date: '2023-11-30',
  },
  {
    title: 'Consultoria em Desenvolvimento',
    category: 'Serviços',
    value: 600.00,
    responsiblePerson: 'Mariana Santos',
    typeTransaction: 'Crédito',
    date: '2023-12-05',
  },
  {
    title: 'Investimento em Ações',
    category: 'Investimento',
    value: 1000.00,
    responsiblePerson: 'Lucas Oliveira',
    typeTransaction: 'Débito',
    date: '2023-12-10',
  },
]

const Home = () => {
  return (
    <>
      <div className={style.headerPage}>
        <h1>Histórico</h1>
      </div>
      <div className={style.table}>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  )
}

export default Home
