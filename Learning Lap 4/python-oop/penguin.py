class Penguin():

    species = "penguin"
    valid_location = ["water", "egg", "ice", "nest", 
                "our hearts", "huddle", "sky"]
    # when a penguin is made - it is refrenced by itself

    def __init__(self, name):
        self.species = "penguin"
        self.can_fly = False
        self.can_swin = True
        self.wants_to_fly = True
        self.name = name
        self.current_location = "egg"

    # getter
    @property
    def location(self):
        return self.current_location

    # setter
    @location.setter
    def set_location(self, new_location):
        if new_location in Penguin.valid_location:
            self.current_location = new_location
        else:
            print("No, you heartless monster")
    
    def yearn(self):
        if (self.can_fly):
            print(self.name + " is actually pretty happy he can fly right now and looking down at others like a boss")
        else:
            print(self.name + " looks at the stars and longs for flight.")
        

        