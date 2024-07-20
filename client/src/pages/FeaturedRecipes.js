import React, { useState } from 'react';
import "./FeaturedRecipes.css";

const FeaturedRecipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipes = [
    {
      id: 1,
      title: "Pani Puri",
      imageUrl: "https://media.gettyimages.com/id/1314329942/photo/goal-gappa-or-pani-puri.jpg?s=170667a&w=gi&k=20&c=eSNm_qmnhH-7YYl_qGIwx9Ls5yK7XQlViw8MeM3IbuM=",
      ingredients: [
        "20-30 puris (hollow, crispy shells)",
        "1 cup tamarind chutney",
        "1 cup green mint-coriander chutney",
        "1 cup boiled and mashed potatoes",
        "1 cup cooked chickpeas (optional)",
        "1/2 cup finely chopped onions",
        "1/2 cup sev (crispy chickpea noodles)",
        "Chaat masala to taste",
        "Salt to taste",
      ],
      steps: [
        "Gently make a hole in the top of each puri, creating a cavity without breaking the shell.",
        "Fill each puri with a spoonful of mashed potatoes and chickpeas (if using).",
        "Add chopped onions and a pinch of chaat masala to each puri.",
        "Pour tamarind chutney and mint-coriander chutney into each puri according to your spice preference.",
        "Sprinkle a pinch of salt on top.",
        "Garnish with sev and more chaat masala if desired.",
        "Serve immediately and enjoy your Pani Puri!",
      ],
      nutritionalInfo: {
        calories: "15-20",
        protein: "0.2g",
        carbohydrates: "3-4g",
        fat: "0.1g",
        fiber: "0.2g",
      },
    },
    {
      id: 2,
      title: "Coffee",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/640px-Cappuccino_at_Sightglass_Coffee.jpg",
      ingredients: [
        "1-2 tablespoons coffee grounds (or instant coffee)",
        "1 cup hot water",
        "Sugar to taste",
        "Milk or creamer to taste (optional)",
      ],
      steps: [
        "Boil water until it's hot, but not boiling.",
        "Add coffee grounds to a cup.",
        "Pour the hot water over the coffee grounds and stir well to dissolve the coffee. Let it steep for a few minutes.",
        "Add sugar to taste and stir until it's dissolved.",
        "If desired, add milk or creamer to achieve your preferred level of creaminess.",
        "Your coffee is ready to enjoy!",
      ],
      nutritionalInfo: {
        calories: "2",
        protein: "0.3g",
        carbohydrates: "0.2g",
        fat: "0g",
        fiber: "0g",
      },
    },
    {
      id: 3,
      title: "Semiya (Vermicelli)",
      imageUrl: "https://t3.ftcdn.net/jpg/03/07/40/90/240_F_307409038_9ZpMkhq4kLGzoeqZxi3B4WCRtI6WBMEA.jpg",
      ingredients: [
        "1 cup vermicelli (semiya)",
        "2 tablespoons ghee (clarified butter) or oil",
        "1/2 cup mixed vegetables (e.g., carrots, peas, beans)",
        "1/2 teaspoon mustard seeds",
        "1/2 teaspoon cumin seeds",
        "1 green chili, chopped (adjust to your spice preference)",
        "A few curry leaves",
        "A pinch of asafoetida (hing)",
        "Salt to taste",
      ],
      steps: [
        "Roast the vermicelli in a dry pan until it turns golden brown. Set aside.",
        "Heat ghee or oil in a pan. Add mustard seeds, cumin seeds, and asafoetida. Let them splutter.",
        "Add chopped green chili, curry leaves, and mixed vegetables. Sauté until the vegetables are tender.",
        "Pour in 2 cups of water and add salt. Bring it to a boil.",
        "Add the roasted vermicelli, reduce the heat, and cover. Let it cook for about 10 minutes or until the vermicelli is soft and cooked through.",
        "Fluff the Semiya with a fork, and your dish is ready to serve.",
      ],
      nutritionalInfo: {
        calories: "180-220",
        protein: "4-5g",
        carbohydrates: "30-35g",
        fat: "4-6g",
        fiber: "1-2g",
      },
    },
    {
      id: 4,
      title: "Mutton Biryani",
      imageUrl: "https://i.ytimg.com/vi/s4YsKuoYTe8/maxresdefault.jpg",
      ingredients: [
        "500g mutton, washed and cleaned",
        "2 cups basmati rice, soaked",
        "2 onions, thinly sliced",
        "2 tomatoes, chopped",
        "1/4 cup plain yogurt",
        "2 tablespoons ginger-garlic paste",
        "1/2 cup chopped coriander leaves",
        "1/2 cup chopped mint leaves",
        "2 teaspoons biryani masala",
        "1/2 teaspoon turmeric powder",
        "1/2 teaspoon red chili powder (adjust to your spice preference)",
        "2-3 green chilies, slit",
        "Whole spices (e.g., cloves, cardamom, cinnamon, bay leaf)",
        "Ghee or cooking oil",
        "Salt to taste",
        "Saffron strands soaked in warm milk (for garnish)",
      ],
      steps: [
        "Marinate mutton with yogurt, ginger-garlic paste, biryani masala, turmeric, and salt. Let it sit for at least 1-2 hours.",
        "In a large pot, heat ghee or cooking oil. Add whole spices and sliced onions. Sauté until the onions turn golden brown.",
        "Add the marinated mutton and cook until it's partially done. Add chopped tomatoes, green chilies, and mint-coriander leaves. Cook until the tomatoes are soft.",
        "In a separate pot, parboil the soaked rice. Drain and set aside.",
        "Layer the partially cooked mutton with the parboiled rice in the pot. Sprinkle saffron milk on top for color and aroma.",
        "Cover and cook on low heat (dum) for about 30-40 minutes or until the rice is fully cooked and the flavors meld together.",
        "Your Mutton Biryani is ready to serve. Garnish with additional mint-coriander leaves if desired.",
      ],
      nutritionalInfo: {
        calories: "400-500",
        protein: "12-15g",
        carbohydrates: "40-50g",
        fat: "15-20g",
        fiber: "2-3g",
      },
    },
    {
      id: 5,
      title: "Rasgulla",
      imageUrl: "https://t4.ftcdn.net/jpg/02/23/02/33/360_F_223023382_DkOOzyFXfzOpHDXVSgGb2xmS1uZOkzNn.jpg",
      ingredients: [
        "1 liter milk",
        "1/4 cup lemon juice or vinegar",
        "1 cup sugar",
        "4 cups water",
        "1/4 teaspoon cardamom powder",
        "A few saffron strands (optional, for garnish)",
      ],
      steps: [
        "Boil the milk in a large pan. Once it comes to a boil, add lemon juice or vinegar to curdle the milk. Stir gently until the whey separates from the curd.",
        "Strain the curdled milk through a muslin cloth or fine sieve. Rinse the chenna (paneer) under cold water to remove any trace of lemon juice or vinegar. Squeeze out excess water from the chenna.",
        "Knead the chenna well until it becomes smooth and no longer grainy. Divide it into small, equal-sized portions and roll them into smooth balls, without any cracks.",
        "In a separate pot, combine sugar and water. Bring it to a boil, then reduce the heat and let it simmer. Add the cardamom powder.",
        "Drop the chenna balls into the simmering sugar syrup. Cover the pot and cook for about 20-25 minutes until the rasgullas have doubled in size and are spongy.",
        "Remove the rasgullas from the sugar syrup and allow them to cool. Garnish with saffron strands if desired.",
        "Your Rasgulla is ready to be served chilled or at room temperature.",
      ],
      nutritionalInfo: {
        calories: "100-150",
        protein: "2-3g",
        carbohydrates: "20-25g",
        fat: "0.5-1g",
        fiber: "0g",
      },
    },
    {
      id: 6,
      title: "Kala Jamun",
      imageUrl: "https://foodfusion.com/wp-content/uploads/2021/05/Kala-jamun-Recipe-by-Food-fusion-1.jpg",
      ingredients: [
        "200g khoya (milk solids)",
        "2 tablespoons all-purpose flour",
        "1/4 teaspoon cardamom powder",
        "1/4 teaspoon baking soda",
        "A pinch of saffron strands (optional)",
        "1 cup sugar",
        "1 cup water",
        "Ghee or oil for frying",
      ],
      steps: [
        "In a mixing bowl, crumble the khoya until it's smooth and without any lumps.",
        "Add all-purpose flour, cardamom powder, and baking soda to the khoya. Mix until the dough comes together. If the dough is too dry, you can add a few drops of milk to moisten it.",
        "Divide the dough into small, equal-sized portions and shape them into smooth balls. You can also stuff each ball with a saffron strand if desired.",
        "Heat ghee or oil in a pan. Fry the khoya balls until they turn dark brown or 'kala' on medium-low heat. Be patient and cook them evenly. Remove and set them aside.",
        "In a separate pan, prepare the sugar syrup by boiling sugar and water until it reaches a one-string consistency. Remove it from heat.",
        "Soak the fried khoya balls in the sugar syrup for a few hours to allow them to absorb the syrup and soften.",
        "Your Kala Jamun is ready to be served once they have soaked in the syrup and become deliciously sweet.",
      ],
      nutritionalInfo: {
        calories: "100-150",
        protein: "1-2g",
        carbohydrates: "10-15g",
        fat: "6-9g",
        fiber: "0.2-0.5g",
      },
    },
    {
      id: 7,
      title: "Rasmalai",
      imageUrl: "https://media.istockphoto.com/id/1411786526/photo/rasmalai.jpg?s=612x612&w=0&k=20&c=0WzEpwBAmZ6HoiAdH5h1MywksKDVlIotntUj8e2wxz0=",
      ingredients: [
        "8 pieces of rasgulla (store-bought or homemade)",
        "1 liter whole milk",
        "1/2 cup sugar",
        "1/4 cup chopped pistachios and almonds",
        "1/4 teaspoon cardamom powder",
        "Saffron strands (optional, for garnish)"
      ],
      steps: [
        "In a wide pan, heat the milk and bring it to a boil. Stir frequently to avoid sticking to the bottom.",
        "Lower the heat and add sugar, cardamom powder, and chopped nuts. Simmer and stir occasionally until the milk thickens and reduces to about half its original volume.",
        "While the milk is simmering, gently squeeze excess sugar syrup from the rasgullas. You can also flatten them slightly to allow the flavored milk to penetrate better.",
        "Once the milk is thickened, remove it from heat and let it cool to room temperature. You can refrigerate it to speed up the cooling process.",
        "Place the squeezed rasgullas in the cooled milk. Garnish with saffron strands and more chopped nuts.",
        "Refrigerate for a few hours or until well chilled. Your Rasmalai is ready to serve once the rasgullas have absorbed the flavored milk."
      ],
      nutritionalInfo: {
        calories: "250-350",
        protein: "6-10g",
        carbohydrates: "20-30g",
        fat: "15-20g",
        fiber: "0.2-0.5g"
      },
    },
    {
      id: 8,
      title: "Aloo 65",
      imageUrl: "https://i.ytimg.com/vi/OJkswjo8hpA/maxresdefault.jpg",
      ingredients: [
        "2 large potatoes, peeled and cut into bite-sized pieces",
        "1 cup all-purpose flour",
        "2 tablespoons rice flour",
        "1/2 teaspoon red chili powder",
        "1/2 teaspoon turmeric powder",
        "1/2 teaspoon garam masala",
        "Salt to taste",
        "Oil for frying",
        "Few curry leaves",
        "1-2 green chilies, chopped (adjust to your spice preference)"
      ],
      steps: [
        "In a mixing bowl, combine all-purpose flour, rice flour, red chili powder, turmeric, garam masala, and salt. Add a little water to make a thick batter.",
        "Heat oil in a pan for frying. Dip potato pieces in the batter and deep fry until they are crispy and golden brown. Drain excess oil on paper towels.",
        "In a separate pan, heat a little oil. Add curry leaves and green chilies. Sauté briefly.",
        "Add the fried potato pieces and stir-fry for a few minutes until they are well coated with the seasoning.",
        "Your Aloo 65, a spicy potato snack, is ready to enjoy as an appetizer or side dish!"
      ],
      nutritionalInfo: {
        calories: "200-250",
        protein: "2-3g",
        carbohydrates: "20-25g",
        fat: "12-15g",
        fiber: "1-2g"
      },
    },
    {
      id: 9,
      title: "Vegetable Biryani",
      imageUrl: "https://www.currygram.com/cdn/shop/articles/veg_biryani_1000x1000.jpg?v=1637791140",
      ingredients: [
        "2 cups Basmati rice",
        "1 cup mixed vegetables (e.g., peas, carrots, beans)",
        "2 onions, thinly sliced",
        "1/2 cup yogurt",
        "1/4 cup ghee (clarified butter)",
        "1/4 cup cooking oil",
        "2 teaspoons biryani masala",
        "1/2 teaspoon turmeric powder",
        "Salt to taste"
      ],
      steps: [
        "Wash and soak rice in water for 30 minutes. Drain and set aside.",
        "Heat ghee and oil in a large pot. Sauté onions until golden brown.",
        "Add mixed vegetables and cook until slightly tender.",
        "Add yogurt, biryani masala, turmeric, and salt. Stir well.",
        "Layer half of the rice in the pot, add the vegetable mixture, and top with the remaining rice.",
        "Cover and cook until the rice is tender. Fluff the biryani before serving."
      ],
      nutritionalInfo: {
        calories: "Approximately 300 per serving",
        protein: "5g",
        carbohydrates: "50g",
        fat: "10g"
      },
    },
    {
      id: 10,
      title: "Chicken 65",
      imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style-500x375.jpg",
      ingredients: [
        "500g boneless chicken pieces",
        "1 cup yogurt",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon red chili powder",
        "1/2 teaspoon turmeric powder",
        "1/2 teaspoon garam masala",
        "Salt to taste",
        "Curry leaves for garnish",
        "Oil for deep frying"
      ],
      steps: [
        "Marinate chicken pieces in yogurt, ginger-garlic paste, red chili powder, turmeric, garam masala, and salt. Let it sit for at least 1-2 hours.",
        "Heat oil in a pan for deep frying. Fry the marinated chicken pieces until they are golden brown and cooked through.",
        "Garnish with curry leaves and serve hot as an appetizer or with your choice of side dish."
      ],
      nutritionalInfo: {
        calories: "Approximately [Calories] per serving",
        protein: "[Protein]g",
        // Add more nutritional information if available
      },
    },
    {
      id: 11,
      title: "Tea",
      imageUrl: "https://images.news18.com/ibnlive/uploads/2023/05/international-tea-day-2023.jpg",
      ingredients: [
        "1 tea bag or 1 teaspoon loose tea leaves",
        "1 cup hot water",
        "1-2 teaspoons sugar (optional)",
        "Milk to taste (optional)"
      ],
      steps: [
        "Boil water in a kettle or microwave until it's hot but not boiling.",
        "Place the tea bag or tea leaves in a teapot or a cup.",
        "Pour the hot water over the tea bag or leaves.",
        "Cover and let it steep for 3-5 minutes, or longer for stronger tea.",
        "Remove the tea bag or strain the tea leaves if you used loose tea.",
        "If desired, add sugar and milk to taste and stir. Adjust to your preference.",
        "Your tea is ready to enjoy!"
      ],
      nutritionalInfo: {
        servingSize: "8 fl oz / 240 ml",
        calories: "2",
        protein: "0g",
        carbohydrates: "0g",
        fat: "0g",
        fiber: "0g"
      },
    },
    {
      id: 12,
      title: "Milkshake",
      imageUrl: "https://www.tastingtable.com/img/gallery/old-fashioned-vanilla-milkshake-recipe/l-intro-1669762595.jpg",
      ingredients: [
        "2 cups of milk",
        "2 cups of ice cream (flavor of your choice)",
        "2 tablespoons sugar (adjust to taste)",
        "1 teaspoon vanilla extract",
        "Whipped cream (optional, for garnish)",
        "Maraschino cherry (optional, for garnish)"
      ],
      steps: [
        "In a blender, combine milk, ice cream, sugar, and vanilla extract.",
        "Blend until smooth and creamy, adjusting the sugar if needed for your taste.",
        "Pour the milkshake into glasses and top with whipped cream and a maraschino cherry if desired.",
        "Serve immediately and enjoy your delicious milkshake!"
      ],
      nutritionalInfo: {
        servingSize: "12 fl oz / 360 ml",
        calories: "280-350",
        protein: "8-10g",
        carbohydrates: "35-45g",
        fat: "12-15g",
        fiber: "1-2g"
      },
    }
    
  ];
  
  const handleViewButtonClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="featured-recipes">
      {selectedRecipe && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <br/>
            <br/>
            <br/>
            <h2>{selectedRecipe.title}</h2>
            <img src={selectedRecipe.imageUrl} alt={selectedRecipe.title} className="modal-image" />
            <div className="details">
              <div className="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="steps">
                <h3>Steps:</h3>
                <ul>
                  {selectedRecipe.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
              <div className="nutritional-info">
                <h3>Nutritional Information:</h3>
                <p>Per serving (approximate values)</p>
                <ul>
                  <li>Calories: {selectedRecipe.nutritionalInfo.calories}</li>
                  <li>Protein: {selectedRecipe.nutritionalInfo.protein}</li>
                  <li>Carbohydrates: {selectedRecipe.nutritionalInfo.carbohydrates}</li>
                  <li>Fat: {selectedRecipe.nutritionalInfo.fat}</li>
                  <li>Fiber: {selectedRecipe.nutritionalInfo.fiber}</li>
                </ul>
              </div>
            </div>
            <button className="close-button" onClick={handleCloseModal}>Close</button>

          </div>
        </div>
      )}

      <h1>Featured Recipes</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.imageUrl} alt={recipe.title} height={300} width={300} />
            <h3>{recipe.title}</h3>
            <button className="view-button" onClick={() => handleViewButtonClick(recipe)}>
              View Recipe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRecipes;
