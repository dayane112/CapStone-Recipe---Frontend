export default function defaultImage(category) {
    switch (category) {
        case 'breakfast':
            return 'https://images.pexels.com/photos/106877/pexels-photo-106877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        case 'lunch':
            return 'https://images.pexels.com/photos/5794881/pexels-photo-5794881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        case 'dinner':
            return 'https://images.pexels.com/photos/29253307/pexels-photo-29253307/free-photo-of-delicious-middle-eastern-feast-flat-lay.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        case 'dessert':
            return 'https://images.pexels.com/photos/6148264/pexels-photo-6148264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        case 'baking':
            return 'https://images.pexels.com/photos/14750105/pexels-photo-14750105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        case 'drink':
            return 'https://images.pexels.com/photos/28717625/pexels-photo-28717625/free-photo-of-bartender-pouring-cocktail-into-glasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        default:
            return '';
    }
}