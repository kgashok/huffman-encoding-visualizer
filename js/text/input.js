function interpret_text(text) {
  // Init result
  var result = {
    text: text,
    bit_string: "",
    encoded_tree: {},
    file_output: [],
    compression_percentage: 0.0, 
    compression_ratio: 0.0
  };

  // Build data
  var input_data = build_character_nodes(text);
  var encoded_tree = build_tree(input_data);

  // Set encoded tree
  result.encoded_tree = encoded_tree;

  // Generate paths
  var paths = {};
  build_path(encoded_tree, paths);
  var pad = { count: 0 };
  var byte_array = encode_string(text, paths, pad);

  // Create bit string
  for (var i = 0; i < byte_array.length; i++) {
    result.bit_string +=
      byte_array[i].toString(2).paddingLeft("00000000") + " ";
  }

  // Build file output
  result.file_output = build_file_output(paths, byte_array, pad.count);

  // Calculate compression metrics
  // Note: In UTF-8/ASCII, each character is typically 8 bits
  var original_size_bits = text.length * 8;
  
  // Compression percentage: includes metadata overhead
  // Accounts for the complete encoded file (metadata + content)
  // Convert file_output bytes to bits (Uint8Array.length is in bytes)
  result.compression_percentage =
    (1 - (result.file_output.length * 8) / original_size_bits) * 100;
  
  // Compression ratio: content only (excludes metadata)
  // Shows the efficiency of Huffman encoding on content alone
  // Convert byte_array bytes to bits for proper comparison
  result.compression_ratio = 
    (1 - (byte_array.length * 8) / original_size_bits) * 100;

  //console.log("text", text.length, "byte", byte_array.length, "file", result.file_output.length, 
  //            result.compression_percentage, result.compression_ratio);

  // Return
  return result;
}
