import React from 'react'

const ThisCard = (props) => {
  const {
    contact,
    index
  } = props

  const activeClass = contact.favorite ? 'active' : '';

  return (
    <section className="address-card">
      <header>
        <span initials={contact.initials}></span>
        <h2>{contact.fullName}</h2>
        <div className={`favorite ${activeClass}`}>☆</div>
      </header>

      <main>
        <ul>
          <li>
            <span> Phone: </span>
            {contact.phone ? contact.phone : 'N/A'}
          </li>
          <li>
            <span> Email: </span>
            {contact.email ? contact.email : 'N/A'}
          </li>
        </ul>
      </main>
    </section >
  )
}

export default ThisCard;