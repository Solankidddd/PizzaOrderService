package org.niit.PizzaService.domain;

import org.springframework.data.annotation.Id;

public class Pizza {
    @Id
    private int pizzaId;
    private String pizzaName;
    private float pizzaPrice;
    private String[] tags;
    private String imageURL;
    private String[] origins;
    private float star;
    private boolean favourite;
    public Pizza() {
    }

    public Pizza(int pizzaId, String pizzaName, float pizzaPrice, String[] tags, String imageURL, String[] origins, float star, boolean favourite) {
        this.pizzaId = pizzaId;
        this.pizzaName = pizzaName;
        this.pizzaPrice = pizzaPrice;
        this.tags = tags;
        this.imageURL = imageURL;
        this.origins = origins;
        this.star = star;
        this.favourite = favourite;
    }

    public int getPizzaId() {
        return pizzaId;
    }

    public void setPizzaId(int pizzaId) {
        this.pizzaId = pizzaId;
    }

    public String getPizzaName() {
        return pizzaName;
    }

    public void setPizzaName(String pizzaName) {
        this.pizzaName = pizzaName;
    }

    public float getPizzaPrice() {
        return pizzaPrice;
    }

    public void setPizzaPrice(float pizzaPrice) {
        this.pizzaPrice = pizzaPrice;
    }

    public String[] getTags() {
        return tags;
    }

    public void setTags(String[] tags) {
        this.tags = tags;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public String[] getOrigins() {
        return origins;
    }

    public void setOrigins(String[] origins) {
        this.origins = origins;
    }

    public float getStar() {
        return star;
    }

    public void setStar(float star) {
        this.star = star;
    }

    public boolean isFavourite() {
        return favourite;
    }

    public void setFavourite(boolean favourite) {
        this.favourite = favourite;
    }
}
