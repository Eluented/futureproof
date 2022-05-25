from penguin import Penguin

if __name__ == "__main__":
    print("all set up")

    pens = [Penguin(i) for i in ["Mulan", "Cinderella", "Moana", "Belle", "Jasmine"]]

    pens[4].can_fly = True

    pens[3].set_location = "BRUH"
    for p in pens:
        p.yearn()