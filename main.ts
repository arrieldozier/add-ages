let remainder = 0
let total_sum_of_the_added_ages = 0
let Total_number_of_people = game.askForNumber("How many people are in the class?")
let Ages_of_every_person_counted = game.askForString("What are ages of every person that was counted ")
game.splash(game.ask("Are all people and their ages counted?"))
if (true) {
    total_sum_of_the_added_ages = game.askForNumber("What is the sum of the added numbers?")
    game.splash("The total value of the sum is" + total_sum_of_the_added_ages)
    remainder = game.askForNumber("What is the remainder of the total sum and people? ")
    game.splash("The average age of people in the class is" + remainder)
}
