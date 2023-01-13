import React from 'react'

function FaqSub({faq, index, toggleFAQ}) {
	return (
		<div className='faq-header'>
			<h1>FAQS</h1>
		</div>,
		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
		>
			<div className="faq-question">
				{faq.question}
			</div>
			<div className="faq-answer">
				{faq.answer}
			</div>
		</div>
	)
}

export default FaqSub;