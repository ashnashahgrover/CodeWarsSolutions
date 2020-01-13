#Consider being given a list of stars, each with a name and a set of co-ordinates. Given this list, and a number 'k' as parameters, write a function that returns the 'k' closet stars to the origin.

require 'pry'

def closest_stars(stars, k)
  stars = stars.sort_by { |name, x_y| (x_y[0]**2+x_y[1]**2)**0.5 }
  return stars.to_h.first(k).to_h
end

def closest_stars(stars, k)
  shortest = stars.first(k).to_h
  shortest = shortest.sort_by { |name, x_y| (x_y[0]**2+x_y[1]**2)**0.5 }.to_h
  n = stars.keys.length
  stars__={}
  stars.keys[k..n-1].each { |key| stars__[key]=stars[key] }
  stars__.each do |name, x_y|
    x = shortest.values.last[0]
    y = shortest.values.last[1]
    max = (x**2 + y**2)**0.5
    current_star_dist = (x_y[0]**2+x_y[1]**2)**0.5
    if current_star_dist < max
      shortest.delete(shortest.keys.last)
      shortest[name] = x_y
      shortest = shortest.sort_by { |name, x_y| (x_y[0]**2+x_y[1]**2)**0.5 }.to_h
    end
  end
  return shortest
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


puts closest_stars(stars, 4)
