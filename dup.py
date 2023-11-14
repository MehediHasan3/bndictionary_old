def remove_duplicate_lines_with_log(file_path):
    # Open the file in read mode
    with open(file_path, 'r') as file:
        # Read all lines from the file
        lines = file.readlines()

    # Create a dictionary to store the count of each line
    line_counts = {}

    # Create a set to store unique lines
    unique_lines = set()

    # Iterate through the lines and count occurrences
    for line in lines:
        line = line.strip()  # Remove leading and trailing whitespaces
        if line in line_counts:
            line_counts[line] += 1
        else:
            line_counts[line] = 1
            unique_lines.add(line)

    # Open the file in write mode and write unique lines
    with open(file_path, 'w') as file:
        for line in unique_lines:
            file.write(line + '\n')

    # Print log of duplicate lines and their counts
    print("Duplicate lines log:")
    for line, count in line_counts.items():
        if count > 1:
            print(f"Line: '{line}', Count: {count}")

    print(f"Duplicate lines removed in '{file_path}'.")

# Call the function with the file path
remove_duplicate_lines_with_log('words.txt')
