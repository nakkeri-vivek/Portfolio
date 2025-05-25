from rembg import remove
from PIL import Image

# Load and remove background
img_b = Image.open("website/WhatsApp Image 2025-05-25 at 11.50.12_08f18740.jpg")
img_a = Image.open("website/WhatsApp Image 2025-05-25 at 12.55.37_9cb71004.jpg")

subject_a = remove(img_a)
subject_b = remove(img_b)

# Resize to match (optional)
bg_b = img_b.resize(subject_a.size)
bg_a = img_a.resize(subject_b.size)

# Composite: paste subject A onto background B
final_a = Image.new("RGBA", subject_a.size)
final_a.paste(bg_b, (0, 0))
final_a.paste(subject_a, (0, 0), subject_a)

# Composite: paste subject B onto background A
final_b = Image.new("RGBA", subject_b.size)
final_b.paste(bg_a, (0, 0))
final_b.paste(subject_b, (0, 0), subject_b)

# Save the results
final_a.save("swapped_a.png")
final_b.save("swapped_b.png")
