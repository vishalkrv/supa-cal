'use client'

import './styles.css'
import MenuBar from './MenuBar'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'


const Tiptap = ({sidebar}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: true,
      }),
      Highlight,
      TaskList,
      TaskItem,
      ListItem,
      TextStyle
    ],
    content: '<p>Hello World! 🌎️</p>',
  })

  return (
    <div className="editor bg-white w-full border border-black-100">
      {editor && <MenuBar editor={editor} />}
      <EditorContent className="editor__content" editor={editor} />
      {sidebar}
    </div>
  )
}

export default Tiptap
