import React, { useState } from 'react'
import './Contact.css'

const API = 'https://vernanbackend.ezlab.in/api/contact-us/'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
    const [sending, setSending] = useState(false)
    const [errors, setErrors] = useState({})

    // stronger but simple email check:
    // - no spaces
    // - no consecutive dots
    // - local part and domain allowed chars
    // - TLD 2-24 letters
    const simpleEmail = email => {
        if (!email) return false
        const s = String(email).trim()

        // regex: no consecutive dots, capture local, domain (without final tld), and tld
        const re = /^(?!.*\.\.)([A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*)@([A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*)\.([A-Za-z]{2,24})$/
        const m = s.match(re)
        if (!m) return false

        const domainPart = m[2].toLowerCase() // may include subdomains
        const tld = m[3].toLowerCase()

        // keep a TLD whitelist (expand if you want to accept more)
        const allowedTlds = new Set([
            'com', 'net', 'org', 'in', 'co', 'io', 'ai', 'edu', 'gov', 'biz', 'info', 'me', 'app', 'dev', 'tech',
            'online', 'site', 'store', 'shop', 'xyz', 'club', 'pro', 'agency', 'cloud', 'solutions', 'ltd',
            'ac', 'uk', 'us', 'ca', 'au', 'de', 'fr', 'jp', 'ru', 'br', 'za', 'nl', 'se', 'no', 'es', 'it', 'ch'
        ])
        if (!allowedTlds.has(tld)) return false

        // take the last label of the domain (the main provider or domain name)
        const domainMain = domainPart.split('.').pop().toLowerCase()

        // common providers to protect against typos (expand as needed)
        const providers = ['gmail', 'googlemail', 'yahoo', 'hotmail', 'outlook', 'rediff', 'protonmail', 'icloud', 'aol', 'live', 'gmx', 'zoho']

        // if domain is exactly a known provider, accept
        if (providers.includes(domainMain)) return true

        // quick Levenshtein (edit distance) - small and fast
        function editDistance(a, b) {
            const la = a.length, lb = b.length
            if (!la) return lb
            if (!lb) return la
            const dp = Array.from({ length: la + 1 }, (_, i) => i)
            for (let j = 1; j <= lb; j++) {
                let prev = dp[0]
                dp[0] = j
                for (let i = 1; i <= la; i++) {
                    const cur = dp[i]
                    const cost = a[i - 1] === b[j - 1] ? 0 : 1
                    dp[i] = Math.min(
                        dp[i] + 1,        // deletion
                        dp[i - 1] + 1,    // insertion
                        prev + cost       // substitution
                    )
                    prev = cur
                }
            }
            return dp[la]
        }

        // if domainMain is *very* close to a popular provider (likely a typo), reject
        for (const p of providers) {
            if (editDistance(domainMain, p) <= 1) {
                return false // e.g. 'gmaill' -> close to 'gmail', reject
            }
        }

        // otherwise accept (valid format, allowed tld, not a provider-typo)
        return true
    }

    function handleChange(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
        setErrors({ ...errors, [name]: '' }) // clear error when user types
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newErrors = {}

        if (!form.name.trim()) newErrors.name = 'Name required'
        if (!form.email.trim()) newErrors.email = 'Email required'
        else if (!simpleEmail(form.email)) newErrors.email = 'Invalid email'
        if (!form.message.trim()) newErrors.message = 'Message required'

        setErrors(newErrors)
        if (Object.keys(newErrors).length) return

        setSending(true)
        fetch(API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        })
            .then(res => {
                if (res.ok) {
                    setForm(prev => ({ ...prev, message: 'Form Submitted' }))
                    setErrors({})
                } else {
                    setErrors({ server: 'Server error' })
                }
            })
            .catch(() => setErrors({ server: 'Network error' }))
            .finally(() => setSending(false))
    }

    return (
        <div className='wrapper'>
            <div className='left-wrapper'>
                <p className='left-content'>
                    Whether you have an idea, a question, or simply want <br />
                    to explore how V can work together, V’re just a <br />
                    message away. <br />
                    Let’s catch up over coffee. <br />
                    Great stories always begin with a good conversation <br />
                </p>
                <img src='footer.png' alt='' className='footer-left' />
            </div>

            <div className='right-wrapper'>
                <img src='top-right-vec.png' alt='' className='top-right' />

                <form className='right-container-form' onSubmit={handleSubmit}>
                    <div className='text1'>Join the Story</div>
                    <div className='text2'>Ready to bring your vision to life? Let’s talk.</div>

                    <div>
                        {errors.name && <div className='error'>{errors.name}</div>}
                        <input
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            className={`inp1 ${errors.name ? 'invalid' : ''}`}
                            placeholder='Your name*'
                        />
                    </div>

                    <div>
                        {errors.email && <div className='error'>{errors.email}</div>}
                        <input
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            className={`inp2 ${errors.email ? 'invalid' : ''}`}
                            placeholder='Your email*'
                        />
                    </div>

                    <div>
                        <input
                            name='phone'
                            value={form.phone}
                            onChange={handleChange}
                            className='inp3'
                            placeholder='Phone'
                        />
                    </div>

                    <div>
                        {errors.message && <div className='error'>{errors.message}</div>}
                        <textarea
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            className={`inp4 ${errors.message ? 'invalid' : ''}`}
                            placeholder='Your message*'
                        />
                    </div>

                    {errors.server && <div className='error'>{errors.server}</div>}

                    <button type='submit' className='sub' disabled={sending}>
                        {sending ? 'Sending...' : 'Submit'}
                    </button>

                    <div className='below-form'>
                        <div className='links'>vernita@varnanfilms.co.in</div>
                        <div className='links links1'>|</div>
                        <div className='links'>+91 98736 84567</div>
                    </div>
                </form>
            </div>
        </div>
    )
}
