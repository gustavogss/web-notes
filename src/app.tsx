import logo from './assets/logo.svg'
import { AddNote } from './components/addnote'

import { Card } from './components/card'

export function App() {
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
                <AddNote title='Adicionar Nota' description='Grave uma nota em áudio que será convertida para texto autmáticamente' />
                <Card date= {new Date()} content='Blabla bla' />
                <Card date={new Date()}  content='Blabla bla' />
                <Card date ={new Date()}  content='Blabla bla' />
            </div>
        </div>
    )
}