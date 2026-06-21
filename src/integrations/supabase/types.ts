export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      abandoned_leads: {
        Row: {
          answers: Json
          conversation_id: string | null
          created_at: string
          customer_email: string
          customer_name: string | null
          customer_phone: string | null
          estimate_amount: number | null
          flow_type: string
          followup_sent: boolean
          followup_sent_at: string | null
          id: string
          updated_at: string
        }
        Insert: {
          answers?: Json
          conversation_id?: string | null
          created_at?: string
          customer_email: string
          customer_name?: string | null
          customer_phone?: string | null
          estimate_amount?: number | null
          flow_type: string
          followup_sent?: boolean
          followup_sent_at?: string | null
          id?: string
          updated_at?: string
        }
        Update: {
          answers?: Json
          conversation_id?: string | null
          created_at?: string
          customer_email?: string
          customer_name?: string | null
          customer_phone?: string | null
          estimate_amount?: number | null
          flow_type?: string
          followup_sent?: boolean
          followup_sent_at?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "abandoned_leads_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "chatbot_conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts: {
        Row: {
          category: string
          content: string
          created_at: string
          excerpt: string
          id: string
          is_published: boolean
          published_at: string
          read_time: string
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          category?: string
          content: string
          created_at?: string
          excerpt: string
          id?: string
          is_published?: boolean
          published_at?: string
          read_time?: string
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          content?: string
          created_at?: string
          excerpt?: string
          id?: string
          is_published?: boolean
          published_at?: string
          read_time?: string
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      booking_blocked_dates: {
        Row: {
          blocked_date: string
          created_at: string
          id: string
          reason: string | null
        }
        Insert: {
          blocked_date: string
          created_at?: string
          id?: string
          reason?: string | null
        }
        Update: {
          blocked_date?: string
          created_at?: string
          id?: string
          reason?: string | null
        }
        Relationships: []
      }
      bookings: {
        Row: {
          add_ons: string[] | null
          address: string
          baths: string
          beds: string
          created_at: string
          customer_email: string
          customer_id: string | null
          customer_name: string
          customer_phone: string
          frequency: string
          id: string
          idempotency_key: string | null
          pet_info: string | null
          preferred_date: string
          review_email_sent_at: string | null
          service_type: string
          sms_consent: boolean
          special_instructions: string | null
          sqft: number
          status: Database["public"]["Enums"]["booking_status"]
          time_slot: string | null
          total_price: number
          updated_at: string
        }
        Insert: {
          add_ons?: string[] | null
          address: string
          baths: string
          beds: string
          created_at?: string
          customer_email: string
          customer_id?: string | null
          customer_name: string
          customer_phone: string
          frequency: string
          id?: string
          idempotency_key?: string | null
          pet_info?: string | null
          preferred_date: string
          review_email_sent_at?: string | null
          service_type: string
          sms_consent?: boolean
          special_instructions?: string | null
          sqft: number
          status?: Database["public"]["Enums"]["booking_status"]
          time_slot?: string | null
          total_price: number
          updated_at?: string
        }
        Update: {
          add_ons?: string[] | null
          address?: string
          baths?: string
          beds?: string
          created_at?: string
          customer_email?: string
          customer_id?: string | null
          customer_name?: string
          customer_phone?: string
          frequency?: string
          id?: string
          idempotency_key?: string | null
          pet_info?: string | null
          preferred_date?: string
          review_email_sent_at?: string | null
          service_type?: string
          sms_consent?: boolean
          special_instructions?: string | null
          sqft?: number
          status?: Database["public"]["Enums"]["booking_status"]
          time_slot?: string | null
          total_price?: number
          updated_at?: string
        }
        Relationships: []
      }
      chatbot_conversations: {
        Row: {
          answers: Json
          converted_to_booking: boolean
          created_at: string
          customer_email: string | null
          customer_name: string | null
          customer_phone: string | null
          estimate_amount: number | null
          flow_type: string
          id: string
          status: string
          updated_at: string
        }
        Insert: {
          answers?: Json
          converted_to_booking?: boolean
          created_at?: string
          customer_email?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          estimate_amount?: number | null
          flow_type: string
          id?: string
          status?: string
          updated_at?: string
        }
        Update: {
          answers?: Json
          converted_to_booking?: boolean
          created_at?: string
          customer_email?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          estimate_amount?: number | null
          flow_type?: string
          id?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      cleaner_applications: {
        Row: {
          can_provide_references: boolean
          created_at: string
          email: string
          has_insurance: boolean
          has_supplies: boolean
          has_transportation: boolean
          id: string
          name: string
          phone: string | null
          status: string
          supply_pictures: string[] | null
          updated_at: string
          work_areas: string[]
          years_experience: number
        }
        Insert: {
          can_provide_references?: boolean
          created_at?: string
          email: string
          has_insurance?: boolean
          has_supplies?: boolean
          has_transportation?: boolean
          id?: string
          name: string
          phone?: string | null
          status?: string
          supply_pictures?: string[] | null
          updated_at?: string
          work_areas?: string[]
          years_experience?: number
        }
        Update: {
          can_provide_references?: boolean
          created_at?: string
          email?: string
          has_insurance?: boolean
          has_supplies?: boolean
          has_transportation?: boolean
          id?: string
          name?: string
          phone?: string | null
          status?: string
          supply_pictures?: string[] | null
          updated_at?: string
          work_areas?: string[]
          years_experience?: number
        }
        Relationships: []
      }
      commercial_requests: {
        Row: {
          address: string | null
          city: string | null
          company_name: string
          contact_name: string
          created_at: string
          email: string
          frequency: string | null
          id: string
          message: string | null
          phone: string
          property_type: string
          square_feet: string | null
          state: string | null
          status: string
          updated_at: string
          zip: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          company_name: string
          contact_name: string
          created_at?: string
          email: string
          frequency?: string | null
          id?: string
          message?: string | null
          phone: string
          property_type: string
          square_feet?: string | null
          state?: string | null
          status?: string
          updated_at?: string
          zip?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          company_name?: string
          contact_name?: string
          created_at?: string
          email?: string
          frequency?: string | null
          id?: string
          message?: string | null
          phone?: string
          property_type?: string
          square_feet?: string | null
          state?: string | null
          status?: string
          updated_at?: string
          zip?: string | null
        }
        Relationships: []
      }
      password_reset_otps: {
        Row: {
          created_at: string
          expires_at: string
          id: string
          otp_code: string
          used: boolean
          user_id: string
        }
        Insert: {
          created_at?: string
          expires_at: string
          id?: string
          otp_code: string
          used?: boolean
          user_id: string
        }
        Update: {
          created_at?: string
          expires_at?: string
          id?: string
          otp_code?: string
          used?: boolean
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      quote_requests: {
        Row: {
          address: string
          bathrooms: string
          bedrooms: string
          city: string
          consent_email: boolean
          consent_sms: boolean
          created_at: string
          current_clean_level: string
          email: string
          first_name: string
          frequency: string
          id: string
          last_name: string
          phone: string
          square_feet: string
          state: string
          status: string
          updated_at: string
          zip: string
        }
        Insert: {
          address: string
          bathrooms: string
          bedrooms: string
          city: string
          consent_email?: boolean
          consent_sms?: boolean
          created_at?: string
          current_clean_level: string
          email: string
          first_name: string
          frequency: string
          id?: string
          last_name: string
          phone: string
          square_feet: string
          state: string
          status?: string
          updated_at?: string
          zip: string
        }
        Update: {
          address?: string
          bathrooms?: string
          bedrooms?: string
          city?: string
          consent_email?: boolean
          consent_sms?: boolean
          created_at?: string
          current_clean_level?: string
          email?: string
          first_name?: string
          frequency?: string
          id?: string
          last_name?: string
          phone?: string
          square_feet?: string
          state?: string
          status?: string
          updated_at?: string
          zip?: string
        }
        Relationships: []
      }
      review_submission_log: {
        Row: {
          created_at: string
          id: string
          identifier: string
        }
        Insert: {
          created_at?: string
          id?: string
          identifier: string
        }
        Update: {
          created_at?: string
          id?: string
          identifier?: string
        }
        Relationships: []
      }
      reviews: {
        Row: {
          booking_id: string | null
          created_at: string
          customer_name: string
          id: string
          location: string | null
          rating: number
          review_text: string
          review_token: string | null
          status: string
          token_expires_at: string | null
          updated_at: string
        }
        Insert: {
          booking_id?: string | null
          created_at?: string
          customer_name: string
          id?: string
          location?: string | null
          rating: number
          review_text: string
          review_token?: string | null
          status?: string
          token_expires_at?: string | null
          updated_at?: string
        }
        Update: {
          booking_id?: string | null
          created_at?: string
          customer_name?: string
          id?: string
          location?: string | null
          rating?: number
          review_text?: string
          review_token?: string | null
          status?: string
          token_expires_at?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      service_areas: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          name: string
          slug: string
          sort_order: number
          state: string
          tier: string
          travel_fee: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          name: string
          slug: string
          sort_order?: number
          state?: string
          tier?: string
          travel_fee?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          name?: string
          slug?: string
          sort_order?: number
          state?: string
          tier?: string
          travel_fee?: number
          updated_at?: string
        }
        Relationships: []
      }
      service_pricing: {
        Row: {
          base_price: number
          created_at: string
          id: string
          is_active: boolean
          label: string
          max_sqft: number
          service_type: string
          tier_index: number
          updated_at: string
        }
        Insert: {
          base_price: number
          created_at?: string
          id?: string
          is_active?: boolean
          label: string
          max_sqft: number
          service_type: string
          tier_index: number
          updated_at?: string
        }
        Update: {
          base_price?: number
          created_at?: string
          id?: string
          is_active?: boolean
          label?: string
          max_sqft?: number
          service_type?: string
          tier_index?: number
          updated_at?: string
        }
        Relationships: []
      }
      site_content: {
        Row: {
          created_at: string
          id: string
          key: string
          updated_at: string
          value: string
        }
        Insert: {
          created_at?: string
          id?: string
          key: string
          updated_at?: string
          value?: string
        }
        Update: {
          created_at?: string
          id?: string
          key?: string
          updated_at?: string
          value?: string
        }
        Relationships: []
      }
      sms_send_log: {
        Row: {
          created_at: string
          error_message: string | null
          id: string
          message_type: string
          provider_message_id: string | null
          recipient: string
          recipient_type: string
          related_booking_id: string | null
          success: boolean
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          id?: string
          message_type: string
          provider_message_id?: string | null
          recipient: string
          recipient_type: string
          related_booking_id?: string | null
          success: boolean
        }
        Update: {
          created_at?: string
          error_message?: string | null
          id?: string
          message_type?: string
          provider_message_id?: string | null
          recipient?: string
          recipient_type?: string
          related_booking_id?: string | null
          success?: boolean
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      work_cards: {
        Row: {
          caption: string
          created_at: string
          id: string
          image_url: string
          platform: string
          post_url: string
          sort_order: number
        }
        Insert: {
          caption?: string
          created_at?: string
          id?: string
          image_url: string
          platform?: string
          post_url?: string
          sort_order?: number
        }
        Update: {
          caption?: string
          created_at?: string
          id?: string
          image_url?: string
          platform?: string
          post_url?: string
          sort_order?: number
        }
        Relationships: []
      }
    }
    Views: {
      public_reviews: {
        Row: {
          booking_id: string | null
          created_at: string | null
          customer_name: string | null
          id: string | null
          location: string | null
          rating: number | null
          review_text: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          booking_id?: string | null
          created_at?: string | null
          customer_name?: string | null
          id?: string | null
          location?: string | null
          rating?: number | null
          review_text?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          booking_id?: string | null
          created_at?: string | null
          customer_name?: string | null
          id?: string | null
          location?: string | null
          rating?: number | null
          review_text?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      get_booking_by_idempotency_key: {
        Args: { _booking_id: string; _idempotency_key: string }
        Returns: {
          add_ons: string[] | null
          address: string
          baths: string
          beds: string
          created_at: string
          customer_email: string
          customer_id: string | null
          customer_name: string
          customer_phone: string
          frequency: string
          id: string
          idempotency_key: string | null
          pet_info: string | null
          preferred_date: string
          review_email_sent_at: string | null
          service_type: string
          sms_consent: boolean
          special_instructions: string | null
          sqft: number
          status: Database["public"]["Enums"]["booking_status"]
          time_slot: string | null
          total_price: number
          updated_at: string
        }[]
        SetofOptions: {
          from: "*"
          to: "bookings"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
      booking_status:
        | "pending"
        | "confirmed"
        | "in_progress"
        | "completed"
        | "cancelled"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
      booking_status: [
        "pending",
        "confirmed",
        "in_progress",
        "completed",
        "cancelled",
      ],
    },
  },
} as const
