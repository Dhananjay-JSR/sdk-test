export declare enum Actions {
    no_action = "no_action",
    http_request = "httprequest"
}
export declare enum DelayActions {
    WAIT_FOR = "wait_for",
    WAIT_TILL = "wait_till"
}
export declare enum FileHandlerActions {
    UPLOAD_FILE_TO_BUCKET_FROM_URL = "upload_file_to_bucket_from_url"
}
export declare enum TableActions {
    CREATE_TABLE = "create_table",
    DELETE_TABLE = "delete_table",
    GET_TABLES = "get_tables",
    ADD_TABLE_RECORD = "add_table_record",
    SEARCH_TABLE_RECORDS = "search_table_records",
    GET_TABLE_RECORDS = "get_table_records",
    UPDATE_TABLE_RECORD = "update_table_record",
    DELETE_TABLE_RECORD = "delete_table_record"
}
export declare enum PDFActions {
    CREATE_PDF_FROM_HTML = "create_pdf_from_html",
    MERGE_PDFS = "merge_pdfs"
}
export declare enum DataRefActions {
    CREATE_REF = "create_ref",
    CREATE_BULK_REF = "create_bulk_ref",
    GET_REF_BY_RECORD_ID = "get_ref_by_record_id",
    GET_REF_BY_EXTERNAL_ID = "get_ref_by_external_id",
    DELETE_REF_BY_RECORD_ID = "delete_ref_by_record_id"
}
export declare enum CsvExcelActions {
    CSV_TO_JSON = "csv_to_json",
    JSON_TO_CSV = "json_to_csv",
    PARSE_CSV_TO_ARRAY = "parse_csv_to_array",
    ARRAY_OF_ROWS_TO_CSV = "array_of_rows_to_csv",
    JSON_TO_EXCEL = "json_to_excel",
    JSON_DATA_TO_EXCEL = "json_data_to_excel",
    CSV_TO_EXCEL = "csv_to_excel",
    MERGE_EXCEL_FILES = "merge_excel_files",
    WRITE_DATA_TO_FILE = "write_data_to_file",
    JSON_TO_X12_EDI = "json_to_x12_edi",
    X12_EDI_TO_JSON = "x12_edi_to_json",
    CXML_TO_JSON = "cxml_to_json",
    JSON_TO_CXML = "json_to_cxml"
}
export declare enum StartNodeTrigger {
    API_CALL = "api_call",
    CRON = "cron",
    EVENT = "event"
}
export declare enum GroupActions {
    ArrayIteration = "array_iteration",
    FixedIteration = "fixed_iteration"
}
export type NodeActions = Actions | GroupActions;
