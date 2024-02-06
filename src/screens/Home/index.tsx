import logo from '../../assets/logo.svg'
import { Card } from '../../components/Card'

export function Home() {
    return (
        <div className='mx-auto max-w-6xl my-12 space-y-6'>
            <img src={logo} alt='logo Notes Web' />
            <form className='w-full'>
                <input
                    type="text"
                    placeholder='Busque suas notas...'
                    className='bg-transparent w-full text-2xl font-semibold tracking-tighter 
                outline-none placeholder: text-slate-500'/>
            </form>
            <div className="h-px bg-slate-700" />
            <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
                <div className="bg-slate-600 rounded-md p-5 space-y-3">
                    <span className='text-sm font-medium text-slate-200'>Adicionar nota</span>
                    <p className='text-sm leading-5 text-slate-400'>Grave uma nota em áudio que será convertida para texto autmáticamente</p>
                </div>

               <Card title='Há 2 dias' description='Blabla bla'/>
               <Card title='Há 3 dias' description='Blabla bla'/>
               <Card title='Há 5 dias' description='Blabla bla'/>

            </div>
        </div>
    )
}