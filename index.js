import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.
const recipeJSON =
  '[{"id": "0001","type": "pasta","name": "Spaghetti Bolognese","price": 22.99,"ingredients": {"pasta": {"name": "Spaghetti","preparation": "Boiled al dente"},  "sauce": {"name": "Bolognese","preparation": "Simmered with Tomato and Meat"},  "toppings": [{"name": "Parmesan Cheese",  "quantity": "1/4 cup",  "ingredients": ["Grated Parmesan Cheese"]  },      {"name": "Fresh Basil",  "quantity": "2 tablespoons",  "ingredients": ["Basil Leaves"]  }      ]    }  },{"id": "0002","type": "pasta","name": "Penne Arrabbiata","price": 21.99,"ingredients": {"pasta": {"name": "Penne","preparation": "Boiled al dente"},  "sauce": {"name": "Arrabbiata","spiciness": "Spicy","preparation": "Tomato Sauce with Garlic and Chili"},  "toppings": [{"name": "Crushed Red Pepper",  "quantity": "1 teaspoon",  "ingredients": ["Dried Red Pepper Flakes"]  },      {"name": "Parmesan Cheese",  "quantity": "1/4 cup",  "ingredients": ["Grated Parmesan Cheese"]  },      {"name": "Fresh Parsley",  "quantity": "1 tablespoon",  "ingredients": ["Chopped Parsley"]  }      ]    }  },{"id": "0003","type": "pasta","name": "Fettuccine Alfredo","price": 24.50,"ingredients": {"pasta": {"name": "Fettuccine","preparation": "Boiled al dente"},  "sauce": {"name": "Alfredo","preparation": "Creamy Sauce with Butter and Parmesan"},  "toppings": [{"name": "Parsley",  "quantity": "1 tablespoon",  "ingredients": ["Chopped Fresh Parsley"]  },      {"name": "Cracked Black Pepper",  "quantity": "1/2 teaspoon",  "ingredients": ["Black Pepper"]  }      ]    }  },{"id": "0004","type": "pasta","name": "Linguine Pesto","price": 18.49,"ingredients": {"pasta": {"name": "Linguine","preparation": "Boiled al dente"},  "sauce": {"name": "Pesto","preparation": "Blended Basil, Pine Nuts, Parmesan, and Olive Oil"},  "toppings": [{"name": "Toasted Pine Nuts",  "quantity": "1 tablespoon",  "ingredients": ["Pine Nuts"]  },      {"name": "Parmesan Cheese",  "quantity": "1/4 cup",  "ingredients": ["Grated Parmesan Cheese"]  },      {"name": "Cherry Tomatoes",  "quantity": "1/2 cup",  "ingredients": ["Halved Cherry Tomatoes"]  }      ]    }  }]';

  app.use(express.static("public"));
  app.use(bodyParser.urlencoded({ extended: true }));

  let data;
  
  app.get("/", (req, res) => {
    res.render("index.ejs", { recipe: data });
  });
app.post("/recipe", (req, res) => {
  switch (req.body.choice) {
  case "bolognese":
  data=JSON.parse(recipeJSON)[0];
  break;
  case "arrabbiata":
  data=JSON.parse(recipeJSON)[1];
  break;
  case "alfredo":
  data=JSON.parse(recipeJSON)[2];
  break;
  case "pesto":
  data=JSON.parse(recipeJSON)[3];
  break;
  default:
  break;
 }
 res.redirect("/");
});
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
