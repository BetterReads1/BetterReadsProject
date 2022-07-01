/**
 * ************************************
 *
 * @module  CreateReviewWrittenBits
 * @author
 * @date
 * @description presentation component that renders a single box for each CustomerDetail
 *
 * ************************************
 */
//  import { Editor } from '@tiptap/core'
import React from 'react';
import Highlight from '@tiptap/extension-highlight';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import TextAlign from '@tiptap/extension-text-align';
import StarterKit from '@tiptap/starter-kit';

// import History from '@tiptap/extension-history'

import {EditorContent, useEditor} from '@tiptap/react';
//  import { daEditor, MenuBar} from './notesMenuBar.jsx'

import '../styles/MenuBar.scss';
import '../styles/MenuItem.scss';
import '../_custom.scss';
import MenuBar from './MenuBar.jsx';

const CreateReviewWrittenBits = (props) => {

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right'],
      }),
      Highlight.configure({multicolor: true}),
      TaskList,
      TaskItem,
    ],
    content: `
    Please enter your review there...





.
  `,
  });

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
            <div className='row'>     { /* 1st row in the container */ }

      
                <div id="editcon" className='editor'>
                  {editor && <MenuBar editor={editor} />}
                  <EditorContent
                    className='editor__content container border border-3 rounded-3 mt-2 p-2 border-info shadow'
                    editor={editor}
                  />
                </div>
        <div className='container row  mt-2 px-2'>
        <div className='row'>    
<div className='col-md-8'>  
      <label htmlFor='bookTags'>Tags (separated by commas)</label>
      <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='bookTags' defaultValue=" "></input>
</div>
<div className='col-md-4'>  
      <label htmlFor='bookRating'>Rating</label>
      <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='bookRating' defaultValue=" "></input>
</div>
</div>
        </div>
      </div>
      









      
    </div>
  );
};







export default CreateReviewWrittenBits;

// import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// const axios = require('axios');

// const CreatePost = () => {

//   // componentDidMount() {
//   //     axios.get('http://localhost:3000/')
//   //       .then( res => {
//   //         // console.log(res.locals.test);
//   //         console.log(res.data);
//   //       })
//   //       .catch(err => {
//   //         console.log(err);
//   //       })
//   // }

// /*
// * ==================================================
// *   Creating an EMPTY state.
// * ==================================================
// */

//   const [name, setName] = useState('');
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [comments, setComments] = useState('');
//   const [plotline, setPlotline] = useState('');
//   const [unpredictability, setUnpredictability] = useState('');
//   const [pace, setPace] = useState('');
//   const [writingStyle, setWritingStyle] = useState('');
//   const [ending, setEnding] = useState('');
//   const [overallEnjoyability, setOverallEnjoyability] = useState('');
//   const [tags, setTags] = useState('');

// /*
// * ==================================================
// *   Handles when user presses submit (ghost & mirrors)
// * ==================================================
// */
//   const handleSubmit = async event => {
//     console.log('handleSubmit ran');
//     event.preventDefault(); //prevents the default behaviour of the browser submitting the form so that we can handle things instead.

//     //send post request to backend
//     const form = event.currentTarget; //gets elements the event handler was attached to
//     const url = form.action; //takes API url from form's action attirbute

//     try{
//       const formData = new FormData(form); //takes all the fields in the form and makes their values available through a `FormData` instance
//       console.log("form data: ", formData);
//       formData.tags = formData.tags.split(','); //make tags an array of strings
//       console.log('🔴🟠🟡🟢🔵🟣 | file: CreatePost.jsx | line 50 | CreatePost | formData', formData);
//       consoel.log("form tags data should be an array: ", formData.tags);
//       header = {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       }

//       /*
//       ! ==================================================
//       !   Use of axios + async + await = unnecessary
//       ! ==================================================
//       */

//       const responseData = await axios.post(url, formData, header);
//       console.log('🔴🟠🟡🟢🔵🟣 | file: CreatePost.jsx | line 49 | CreatePost | responseData', {responseData});
//     } catch (error) {
//       /*
//       * ==================================================
//       *   Errors posting are only being sent to console.
//       *   The user IS NOT notified of success or failure.
//       * ==================================================
//       */
//       console.error(error);
//     }

//     /*
//     * ==================================================
//     *   Empty all form fields
//     * ==================================================
//     */
//     setName('');
//     setTitle('');
//     setAuthor('');
//     setComments('');
//     setPlotline('');
//     setUnpredictability('');
//     setPace('');
//     setWritingStyle('');
//     setEnding('');
//     setOverallEnjoyability('');
//     setTags('');
//   }

//   return (
//     <div id="form-container">

//       /*
//       ! ==================================================
//       !   Is this the best place to perform a post in
//       !   a react app???
//       ! ==================================================
//       */
//       <form action="http://localhost:3000/" onSubmit={handleSubmit} id="post-form">
//         Name:<input
//           id="name"
//           name="name"
//           type="text"

//           /*
//           ! ==================================================
//           !   The target values SHOULD NOT be set/reset with
//           !   every key stroke.
//           ! ==================================================
//           */
//           onChange={event => setName(event.target.value)}
//           value={name}
//           required
//         /> <br/>
//         Title:<input
//           id="title"
//           name="title"
//           type="text"
//           onChange={event => setTitle(event.target.value)}
//           value={title}
//           required
//         /><br/>
//         Author: <input
//           id="author"
//           name="author"
//           type="text"
//           onChange={event => setAuthor(event.target.value)}
//           value={author}
//           required
//         /><br/>
//         Comments: <input
//           id="caption"
//           name="caption"
//           type="text"
//           onChange={event => setComments(event.target.value)}
//           value={comments}
//           required
//         /><br/>

//         /*
//         * ==================================================
//         *   Only accepting numbers (without noted meaning)
//         *   (Not good UI design)
//         * ==================================================
//         */

//         <div className='ratings'> Ratings: <br/>
//           Plotline: <input
//             id="plotline"
//             name="plotline"
//             type="number"
//             onChange={event => setPlotline(event.target.value)}
//             value={plotline}
//             required
//           /><br/>
//           Unpredictability: <input
//             id="unpredictability"
//             name="unpredictability"
//             type="text"
//             onChange={event => setUnpredictability(event.target.value)}
//             value={unpredictability}
//             required
//           /> <br/>
//           Pace: <input
//             id="pace"
//             name="pace"
//             type="number"
//             onChange={event => setPace(event.target.value)}
//             value={pace}
//           /> <br/>
//           Writing Style: <input
//             id="writing-style"
//             name="writing-style"
//             type="number"
//             onChange={event => setWritingStyle(event.target.value)}
//             value={writingStyle}
//             required
//           /> <br/>
//           Ending: <input
//             id="ending"
//             name="ending"
//             type="number"
//             onChange={event => setEnding(event.target.value)}
//             value={ending}
//             required
//           /> <br/>
//           Overall Enjoyability: <input
//             id="overall_enjoyability"
//             name="overall_enjoyability"
//             type="number"
//             onChange={event => setOverallEnjoyability(event.target.value)}
//             value={overallEnjoyability}
//             required
//           />
//         </div>
//         Tags:<input
//           id="tags"
//           name="tag"
//           type="text"
//           onChange={event => setTags(event.target.value)}
//           value={tags}
//           placeholder="Separate tags with commas (i.e. fiction, romance, etc)"
//           required
//         /> <br/>
//         <button type="submit">Submit form</button>
//       </form>
//     </div>
//   )
// }

// export default CreatePost;
