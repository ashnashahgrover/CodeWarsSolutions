#Consider being given a list of stars, each with a name and a set of co-ordinates. Given this list, and a number 'k' as parameters, write a function that returns the 'k' closet stars to the origin.

require 'pry'

def closest_stars(stars, k)
  stars = stars.sort_by { |name, x_y| (x_y[0]**2+x_y[1]**2)**0.5 }
  return stars.to_h.first(k).to_h
end



stars = {
  :six=>[15,16],
  :two=>[3,4],
  :eight=>[20,25],
  :seven=>[20,21],
  :three=>[5,6],
  :four=>[7,8],
  :one=>[1,3],
  :five=>[12,13]
}


closest_stars(stars, 4)
