import React, { useState, useEffect } from 'react';
import './prising.css'

const plans = [
    {
        id: 'basik',
        title: 'Basik',
        blocks: [
            {
                name: 'Starter',
                description: 'with all your customers via all conversation channels in one central dashboard.',
                price: '$2.80',
                per: 'Per month',
                includes: [
                    { img: '/assets/svg/galochka.svg', text: '2GB SSD' },
                    // Другие элементы includes1
                ],
            },
            {
                name: 'Pro',
                description: 'More features for growing businesses.',
                price: '$5.00',
                per: 'Per month',
                includes: [
                    { img: '/assets/svg/galochka.svg', text: '5GB SSD' },
                    // Другие элементы includes1
                ],
            },
            {
                name: 'Enterprise',
                description: 'Advanced features for large organizations.',
                price: '$10.00',
                per: 'Per month',
                includes: [
                    { img: '/assets/svg/galochka.svg', text: '10GB SSD' },
                    // Другие элементы includes1
                ],
            },
        ],
    },
    {
        id: 'premium',
        title: 'Premium',
        blocks: [
            {
                name: 'Starter',
                description: 'with all your customers via all conversation channels in one central dashboard.',
                price: '$100',
                per: 'Per month',
                includes: [
                    { img: '/assets/svg/galochka.svg', text: '2GB SSD' },
                    // Другие элементы includes1
                ],
            },
            {
                name: 'Pro',
                description: 'More features for growing businesses.',
                price: '$200',
                per: 'Per month',
                includes: [
                    { img: '/assets/svg/galochka.svg', text: '5GB SSD' },
                    // Другие элементы includes1
                ],
            },
            {
                name: 'Enterprise',
                description: 'Advanced features for large organizations.',
                price: '$300',
                per: 'Per month',
                includes: [
                    { img: '/assets/svg/galochka.svg', text: '10GB SSD' },
                    // Другие элементы includes1
                ],
            },
        ],
    },
];

const Pricing = () => {
    const [activePlan, setActivePlan] = useState('basik');

    useEffect(() => {
        const blocks = document.querySelectorAll('.block2');
        blocks.forEach((block) => {
            block.classList.add('show');
        });
    }, []);

    return (
        <div className="pricing-premuim">
            <div className="pricing-premuim1">
                {plans.map((plan, index) => (
                    <React.Fragment key={plan.id}>
                        <input
                            type="radio"
                            id={`tab${index + 1}`}
                            name="tab"
                            className="tab-input"
                            checked={activePlan === plan.id}
                            onChange={() => setActivePlan(plan.id)}
                        />
                        <label
                            htmlFor={`tab${index + 1}`}
                            className="tab"
                            onClick={() => setActivePlan(plan.id)}
                        >
                            <h3>{plan.title}</h3>
                        </label>
                    </React.Fragment>
                ))}
            </div>
            {plans.map((plan) => (
                <div id={plan.id} className="block" key={plan.id} style={{ display: activePlan === plan.id ? 'flex' : 'none' }}>
                    {plan.blocks.map((block, blockIdx) => (
                        <div className="block2 show" key={blockIdx}>
                            <h2>{block.name}</h2>
                            <p>{block.description}</p>
                            <div className="price">
                                <h3>{block.price}</h3>
                                <p>{block.per}</p>
                                <button>Choose this Plan</button>
                                <div className="includes">
                                    {block.includes.map((include, includeIdx) => (
                                        <div className="includes1" key={includeIdx}>
                                            <img src={include.img} alt="" />
                                            <p>{include.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Pricing;
