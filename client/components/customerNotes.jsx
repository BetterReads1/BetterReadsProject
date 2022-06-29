/**
 * ************************************
 *
 * @module  CustomerNotes
 * @author
 * @date
 * @description presentation component that renders a single box for each CustomerDetail
 *
 * ************************************
 */
 import React, {
  useCallback, useEffect,
  useState,
} from 'react';
 import { useDispatch} from 'react-redux'
//  import { Editor } from '@tiptap/core'
import CharacterCount from '@tiptap/extension-character-count'
import Highlight from '@tiptap/extension-highlight'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'

 import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
//  import { daEditor, MenuBar} from './notesMenuBar.jsx'
 
import '../_custom.scss'
import '../styles/MenuBar.scss'
import '../styles/MenuItem.scss'
import MenuBar from './MenuBar.jsx'




const TicketNotes = (props) => {
// class TicketNotes extends Component {


  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Highlight,
      TaskList,
      TaskItem,
      CharacterCount.configure({
        limit: 10000,
      }),
    ],
    content:  `
    <h3>
      Hi there,
    </h3>
    <p>
      Now is the time for all good men and women to come to the aid of their country.
    </p>
    <ul>
      <li>
        Blah Blah Blah …
      </li>
      <li>
        Yada Yada Yada.
      </li>
    </ul>
    <p>
      Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
    </p>
    <pre><code class="language-css">body {
display: none;
}</code></pre>
    <p>
      It’s only the tip of the iceberg though. Give it a try and click a little bit around.
    </p>
  `,
  })
  
  

  

//   return (
  //       <div className="editor container border border-3 rounded-3 mt-2 p-2 border-info shadow">

//     <MenuBar editor={editor} />
//       </div>
//       <div className="container border border-3 rounded-3 mt-2 p-2 border-info shadow">

//         <EditorContent className="editor__content" editor={editor} />
// </div>
// </div>
//   );

  return (
    <div className='container border border-3 rounded-3 mt-2 p-2 border-info shadow'>
    <div className="editor">
      {editor && <MenuBar editor={editor} />}
      <EditorContent className="editor__content container border border-3 rounded-3 mt-2 p-2 border-info shadow" editor={editor} />
      </div>
      </div>
  )



}

export default TicketNotes;
 