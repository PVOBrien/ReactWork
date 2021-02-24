import React, { useEffect, useState } from 'react'

const ThisCardwHooks = () => {

  const [initials, setInitials] = useState("PVO") // via object destructuring
  const [fullName, setFullName] = useState("Paul O'Brien")
  const [phone, setPhone] = useState("1.253.656.1883")
  const [email, setEmail] = useState("PVOVideo@outlook.com")
  const [favorite, setFavorite] = useState(false)
  const activeClass = favorite ? 'active' : '';

  useEffect(() => {
    console.log(`Value been to ${favorite}`)
  })

  return (
    <section className="address-card">
      <header>
        <span initials={initials}></span>
        <h2>{fullName}</h2>
        <div
          className={`favorite ${activeClass}`}
          onClick={ () => { setFavorite(!favorite) }} // how to pass all the details around for parent/child data updates.
          >☆</div>
      </header>

      <main>
        <ul>
          <li>
            <span> Phone: </span>
            {phone ? phone : 'N/A'}
          </li>
          <li>
            <span> Email: </span>
            {email ? email : 'N/A'}
          </li>
        </ul>
      </main>
    </section >
  )
}

export default ThisCardwHooks;