import { ChangeEvent, useState } from 'react'
import logo from './assets/logo.svg'
import { AddNote } from './components/addnote'

import { Card } from './components/card'

type NoteProps = {
    id: string,
    date: Date,
    content: string
}

export function App() {
    const [search, setSearch] = useState('') 

    const [notes, setNotes] = useState<NoteProps[]>(() => {
        const notesOnStorage = localStorage.getItem('notes');
        if (notesOnStorage) {
            return JSON.parse(notesOnStorage);
        }
        return []
    })

    function onNoteCreated(content: string) {
        const newNote = {
            id: crypto.randomUUID(),
            date: new Date(),
            content,
        }

        const notesArray = [newNote, ...notes]
        setNotes(notesArray)

        localStorage.setItem('notes', JSON.stringify(notesArray));
    }

    function handleSearch(event:ChangeEvent<HTMLInputElement>) {
        const query = event.target.value
        setSearch(query)
    }

    const filteredNotes = search !== '' 
    ? notes.filter(note => note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())) 
    : notes

    return (
        <div className='mx-auto max-w-6xl my-12 space-y-6'>
            <img src={logo} alt='logo Notes Web' />
            <form className='w-full'>
                <input
                    type="text"
                    placeholder='Busque suas notas...'
                    className='bg-transparent w-full text-2xl font-semibold tracking-tighter outline-none placeholder: text-slate-500'
                    onChange={handleSearch}
                    />
            </form>
            <div className="h-px bg-slate-700" />
            <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
                <AddNote
                    title='Adicionar Nota'
                    description='Grave uma nota em áudio que será convertida para texto autmáticamente'
                    onNoteCreated={onNoteCreated}
                />

                {filteredNotes.map(note => {
                    return <Card key={note.id} date={note.date} content={note.content} id={''} />
                })}

            </div>
        </div>
    )
}