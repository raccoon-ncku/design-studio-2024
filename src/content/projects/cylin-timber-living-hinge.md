---
title: 'Timber Living Hinge'
subtitle: 'Design-Make Pavilion'
description: 'Study the relationship between cutting patterns and bending angles, and use this principle to design  a small-scale.'
postDate: 'December 2024'
video: '/rcs2024f/videos/cylin'
colors:
  text: 'text-pearl-bush'
  background: 'bg-orient'
user:
  name: 'Lin, Chun-Yu'
  avatar: '/rcs2024f/images/avatars/cylin.jpg'
metadata:
  location: 'Tainan, Taiwan'
---

## Introduction

Based on research into the relationship between cutting patterns and bending angles, parametric methods can be used to reverse-engineer the density of cutting patterns required for specific bending angles. This enables the design of highly customizable components for constructing complex shapes on a large scale.

While designing small-scale structures, it is crucial to consider not only the relationship between wood bending and cutting patterns but also the machining limits of the equipment and the material utilization rate. Through continuous trial and error, adjustments are made iteratively to optimize the process.

This project involves diverse tasks spanning experimentation, derivation, digital design, manufacturing, and geometric optimization. The research is planned to last approximately one year. The primary goal for this semester is to complete a full cycle of the design-to-manufacturing workflow, testing the physical and geometric limits of various material parameters and establishing the necessary tools for each step. In the following semester, the manufacturing experiences will be fed back into the initial design to refine both the overall form and localized details.

![image.png](/rcs2024f/images/cylin_photo/sample.png)

## 1. Analysis of Physical Principle & Data Collection

![image.png](/rcs2024f/images/cylin_photo/analysis.png)


Referring to others' analyses of this type of bending pattern, while many parameters can be controlled, the ones that significantly affect the bending **angle** are the length and cross-sectional area of the dark gray regions shown above.

I designed a series of experiments to validate this idea by individually adjusting **the width of the connections**, **length of the dark gray regions**, **number of raws**, and **cutting width**. The specimens were suspended in fixtures, with weights added at the center to induce bending. A camera facing the observation plane was set up to record the results.

![image.png](/rcs2024f/images/cylin_photo/tool.png)

![image.png](/rcs2024f/images/cylin_photo/testphoto.png)

After verifying and analyzing the experimental photos, the following conclusions can be drawn:
- The bending angle is determined by the twisting of the dark gray areas (torsional links).
- The number of rows is related to the force required for bending but is unrelated to the achievable bending angle.
- The cutting width (W’cut) does not directly influence the bending behavior once the space required for twisting is satisfied.
- The pattern width (W) affects the bending radius but does not influence the bending angle.

Therefore, in subsequent reverse-engineering processes, the focus should be on controlling the length and width of the torsional links, while other parameters can automatically adjust based on material properties and the required edge length.

Additionally, assuming the twisting occurs around the material's central axis and the patterns are equidistant, the bending result can be simplified into a mesh with rounded corners. This simplification aids in visualizing and simulating bending outcomes. The achievable bending angle is related to the cross-section and length (L) of the torsional links. **Future tests on bending capacity could involve designing experiments to measure the "twisting angle / unit length" for different cross-sections.**

## 2. Form Design concept
![image.png](/rcs2024f/images/cylin_photo/concept.png)
A single unit is formed by a triangle that encloses a circle, and its length can be adjusted according to the available raw material. For example, the CNC machine at the school has a cutting range of 2440mm by 1220mm, so the longest unit perimeter cannot exceed 240cm. In addition to controlling the result of the assembly by the flattened shape, and combining the previous research on the relationship between the pattern and strength, the bending angle of the shape affects the pattern density. By adjusting the strength at each bending point during assembly, the deformation of the shape can be controlled. Compared to laying out an excessive amount of cutting patterns, this method ensures that the strength is not significantly weakened.
![image.png](/rcs2024f/images/cylin_photo/site.png)
The site is currently chosen to be the open space between the bicycle parking lots of Guangfu Building I and Guangfu Building II. The goal is to create a structure that extends outward and provides shade, offering a space for students who usually dine at the Guangfu student cafeteria to come here and have a picnic.
![image.png](/rcs2024f/images/cylin_photo/shape.png)
The upper sections of the three arches arranged in a circular layout are pushed outward and enlarged to provide shading. Physical simulations are then used to determine the connecting surfaces between them, pulling the three curved surfaces inward to achieve balance. Finally, the designed patterns are mapped onto the surfaces and refined, using a single connection system to integrate multiple surfaces, thereby forming a complex topological relationship.

## 3. Background Technique

![image.png](/rcs2024f/images/cylin_photo/technique1.png)
After finalizing the overall form, the desired distribution pattern is drawn within a planar simulation diagram. The inflection points of the pattern are converted into UV coordinates labeled (0~1, 0~1), which are then mapped onto the three-dimensional surface. By combining and trimming, multiple surfaces are integrated to form a complex topology.
![image.png](/rcs2024f/images/cylin_photo/technique2.png)
When a single pattern is extruded into a surface, creating thickness in the direction outside the surface, if "points" are used as the primary method for normal movement, most surfaces, except for spheres, will become "four-point surfaces." This is because the normal of a sphere points to the center of the sphere, allowing it to form a plane with three points in the same plane. However, it is difficult for other curved surfaces to have exactly four points in the same plane. Therefore, an alternative method needs to be found.
![image.png](/rcs2024f/images/cylin_photo/technique3.png)
Currently, the method uses the normal extrusion at the midpoint of "edges." The "intersection line" of two adjacent extruded surfaces serves as the boundary for them. This allows for the reverse calculation of the direction in which the points move (which will not be along the normal direction). Points at the same position in different triangles will generate different "intersection lines," so curved corners are even more necessary to prevent collisions.

## 4. Detailed Adjustment
To reduce the overall weight, a thicker 6mm birch plywood is used at the contact points with the ground, while the remaining majority of the material is only 4mm thick. In addition, a gradual width transition is set, reducing from 15cm at the bottom to 9cm at the top. As mentioned earlier, the bending ability is proportional to the length of the torsional links, so the width cannot be too narrow.

In the last section of the Background Technique chapter, it was noted that the extruded surfaces may collide. This issue becomes more pronounced in areas with significant curvature changes. Additionally, since turning requires sufficient distance to form, the sharp angles should be smoothed into rounded corners, and this adjustment should vary according to the curvature of the area.

![image.jpg](/rcs2024f/images/cylin_photo/optimization.jpg)

## 5. Manufacutring & Construction
![image.jpg](/rcs2024f/images/cylin_photo/Manufacture1.jpg)
![image.jpg](/rcs2024f/images/cylin_photo/Manufacture2.jpg)
After multiple operations on the school's CNC machine to cut and bend the patterns, the following stable parameters have been established:
1. The width of the torsional links should be greater than 5mm, otherwise, the surface wood is prone to being torn apart.
2. The width of the cutting gap should be 2mm larger than the diameter of the flat end mill, or rounded corners should be set at the entry points of sharp turns.
3. The cutting depth for each pass should be set to 2-3mm.

![image.jpg](/rcs2024f/images/cylin_photo/sheet.jpg)
Based on the current specified board thickness, the cost estimation for the upper part, excluding the base, requires 6 sheets of 6mm birch plywood and 15 sheets of 4mm, with a total cost of approximately 25,000 NTD.
## Full Scale Test Model
![image.jpg](/rcs2024f/images/cylin_photo/result1.jpg)
![image.jpg](/rcs2024f/images/cylin_photo/result2.jpg)
![image.jpg](/rcs2024f/images/cylin_photo/result3.jpg)
