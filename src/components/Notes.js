/** @jsxImportSource theme-ui */
import Modal from 'react-modal'

export default function Notes({ notes, open, onClose }) {
  return (
    <Modal isOpen={open} onRequestClose={onClose} contentLabel='Example Modal'>
      <button style={{ float: 'right' }} onClick={onClose}>
        close
      </button>
      <ul sx={{ mt: 4 }}>
        {notes.map(note => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </Modal>
  )
}
