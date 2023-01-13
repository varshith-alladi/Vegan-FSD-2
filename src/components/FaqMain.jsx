import React, {useState}from "react";
import FaqSub from './FaqSub';
import Navbar from "./Navbar";
import '../styles/faq.modules.css';


function FaqMain() {
  const [faqs, setfaqs] = useState([
    {
      question: '  What is the difference between a vegan and a vegetarian?',
      answer: 'A vegetarian lifestyle consists of all plant products as well as dairy products like milk and insect-derived products such as honey and silk. On the other hand, vegan diets avoid all animal-derived products from dairy to leather; meaning it is fully plant-based. It’s a common misconception that it’s harmless to animals if products such as milk, honey or silk are used. In reality, all cattle such as cows and buffaloes end up in slaughterhouses within one-third of their life span upon being deemed ‘unproductive;’ in other words, their ability to produce milk no longer supports the demand. Additionally, they are repeatedly impregnated artificially so they will keep producing milk. Male calves are usually sent to the slaughterhouse to be sold as veal as they considered economically useless while female calves are separated from their mothers within a day or two to prevent her from drinking the milk that is actually meant for her. Similarly, insect-derived products such as honey involve the deaths of numerous bees during the process while silkworms are boiled alive for hours in order to extract silk from them. Such practices are considered the norm for centuries and thus, vegetarianism is often seen as a non-violent way of life. Unfortunately, that is not the case.',
      open: true
    },
    {
      question: 'Is vegan food healthy?',
      answer: 'Just like any other food, vegan food can be healthy or unhealthy. Typically, if the vegan food is predominantly fruits, vegetables, legumes, beans, lentils with no added refined sugar or excessive cooking oils, then it will be healthy. However, if foods are loaded with added sugar, processed flours or excessively fried then they can be unhealthy. So, foods such as chips, candies or beer, despite being vegan, can still be unhealthy whereas salads, tofu, natural nut milks, sprouts, brown or red rice or foods garnished with cold-pressed oil can be much healthier in comparison to other foods.',
      open: false
    },
    {
      question: 'Do I need to consult a doctor before going vegan?',
      answer: 'Going vegan is a great opportunity to improve your eating habits. Therefore, it is a good idea to do, at least, a one-time consult with a doctor or nutritionist before making the switch. Remember, it’s not to decide whether you should go vegan but rather to figure out what your body needs. It’s a great way to obtain a better knowledge of various nutritional needs and to ensure that you do not face any deficiencies so that you can become the healthiest version of yourself.',
      open: false
    },
    {
      question: 'What vegan foods can be made at home?',
      answer: 'With the rise of vegan-friendly alternatives such as plant milks and mock meat, almost all foods can be made at home. All you need are the right products to substitute non-vegan ingredients with. For instance, substitute paneer with tofu and milk with plant milks such as soy, almond or rice. You can also use vegan alternatives for ghee, butter, cheese, mayo and meat that are both delicious and nutritious!',
      open: false
    },
    {
      question: 'Where can you find all vegan alternatives?',
      answer: 'As veganism continues to become more mainstream, plant-based alternatives are becoming more commonplace. Many supermarkets offer plant milks and other vegan-friendly foods and products. There are also many online stores such as Vegan Dukan, where you can find all your vegan needs, from plant-based dairy products to mock meat. All products are 100% vegan and made available in one convenient location.',
      open: false
    },
    {
      question: 'How do vegans get enough calcium?',
      answer: 'Calcium is an important mineral for many bodily benefits including bone health. It’s a common misconception that dairy is required for an individual to achieve a healthy intake of calcium. Plant-based foods can provide you all the calcium you need. In fact, your body may absorb even more calcium from plant-based foods than dairy as the acidic properties of dairy may present problems with absorption. Leafy greens, nut milk, soy products, and ragi are just a few examples of plant-based sources of calcium. For a more in-depth guide to vegan calcium, check out our blog a vegan',
      open: false
    },
    {
      question: 'How do vegans get enough protein?',
      answer: 'Plants have ample sources of protein. Like lentils, soybean, peas, peanuts, cashews, broccoli, etc. There’s no reason to think that plant-based foods have any limitations in terms of protein. It’s important to ensure that the right foods are chosen to supply the body with sufficient amounts of protein. For details, please check the vegan transition guide we have made especially for addressing such popular questions about the vegan diet.',
      open: false
    },
    {
      question: 'Is vegan protein powder healthy?',
      answer: 'Protein powders, in general, are just another supplement to help increase your protein content, be it for putting on muscle mass or just as a daily nutritional supplement. Just because the protein powder is vegan, it doesn’t mean that it’s any less healthy than its non-vegan counterpart. It simply means that the protein comes from plant-based sources such as legumes, grains, seeds or nuts rather than animal products such as eggs, dairy or meat.',
      open: false
    },
    {
      question: 'Is Bread Vegan?',
      answer: 'Traditionally made with flour, water, and yeast, bread, at its purest is vegan. However, nowadays bread is a little fancier. From brioches to bagels, it has become a little tricky to figure out whats and whats not. Its always a good idea to scan the ingredients to make sure that there are no dairy products such as milk or butter, honey or eggs.',

    
      open: false
    },
    {
      question: 'Is Palm Oil Vegan?',
      answer: 'In principle, yes, palm oil is vegan. The controversial nature of palm oil arises from the malpractices conducted by palm oil and palm timber industries. Palm oil is not a sustainable product and has led to significant amounts of deforestation in Africa, America, Asia, Malaysia, and Indonesia thus destroying the natural habits of several species of animals including orangutans, elephants, tigers, and rhinos. Many native tribes also end up being forced out of their homes as more and more land is cleared for palm oil. The devasting impact on the ecosystems have not only resulted in animals species to be near extinction, but it has also contributed to climate change due to carbon emissions. Thus, as the ideology of veganism lies in ending the abuse and exploitation of animals, many vegans opt to either completely boycott palm oil or use certified sustainable palm oil. Such products are required to adhere to strict production methods that minimize harm to the environment and animals. ',
      open: false
    }
    
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }

  
  return (
    <div className="faqbody">
        <div className="App">
    <Navbar />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FaqSub faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default FaqMain;
